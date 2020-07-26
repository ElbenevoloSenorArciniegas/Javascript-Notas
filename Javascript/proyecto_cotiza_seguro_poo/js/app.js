const formulario = document.getElementById('cotizar-seguro');

//constructor para seguro
function Seguro(marca, anio, tipo_seguro) {

    this.marca = marca;
    this.anio = anio;
    this.tipo_seguro = tipo_seguro;

}

//funciones de seguro
Seguro.prototype.cotizar_seguro = function() {
    //console.log(this);

    /* Marcas
      1 - Americano -> 1.15
      2 - Asiatico -> 1.05
      3 - Europeo -> 1.35
    */
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    }

    //leer el año y calcular la cantidad de años transcurridos
    const diferencia = new Date().getFullYear() - this.anio;
    //para cada año de diferencia hay que reducir 3% del valor del suguro

    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
    - Seguro básico -> se multiplica por el 30% mas
    - Seguro completo -> se multiplica por el 50% mas
    */

    if (this.tipo_seguro === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
};

//Objeto para mostrar todo lo relacionado al HTML
function Interfaz() {}

//prototypes de interfaz 

Interfaz.prototype.mostrar_mensaje = function(mensaje, tipo) {
    const div = document.createElement('div');

    if (tipo === 'error') {
        // div.classList = 'error';
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }

    div.innerHTML = `${mensaje}`;

    //agregar un elemento (div) antes del formulario, con el mensaje de error
    formulario.insertBefore(div, document.querySelector('.form-group'));

    //eliminar el mensaje después de 3 segundos
    setTimeout(function() {
        document.querySelector('.mensaje').remove();
    }, 3000);
};

Interfaz.prototype.mostrar_resultado = function(seguro, total) {
    const resultado = document.getElementById('resultado');
    let marca;

    if (seguro.marca === '1') marca = 'Americano';
    else if (seguro.marca === '2') marca = 'Asiático';
    else marca = 'Europeo';

    const div = document.createElement('div');
    div.innerHTML = `
      <p class = 'header'>Tu resumen:</p>
      <p>Marca: ${marca}</p>
      <p>Año: ${seguro.anio}</p>
      <p>Tipo: ${seguro.tipo_seguro}</p>
      <p>Total: ${total}</p>
    `;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';

    setTimeout(function() {
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 3000);

};

//Event listener para submit
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    //tomar la marca seleccionado del select
    const marca = document.getElementById('marca');
    const marca_seleccionada = marca.options[marca.selectedIndex].value;

    //leer el año seleccionado dels elect
    const anio = document.getElementById('anio');
    const anio_seleccionado = anio.options[anio.selectedIndex].value;

    //lee el valor del radio Button
    const tipo = document.querySelector('input[name="tipo"]:checked').value; // sintaxis de jquery

    //crear instancia de Interfaz. 

    const interfaz = new Interfaz();

    //revisando que los campos no estén vacíos
    if (marca_seleccionada === '' || anio_seleccionado === '' || tipo === '') {

        interfaz.mostrar_mensaje('Faltan datos, revisar el formulario y prueba de nuevo', 'error');

    } else {

        //limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');
        if (resultados !== null) {
            resultados.remove();
        }

        //Instanciar seguro y mostrar interfaz
        const seguro = new Seguro(marca_seleccionada, anio_seleccionado, tipo);

        //cotizar el seguro
        const cantidad = seguro.cotizar_seguro();

        //mostrar en la interfaz la cotización
        interfaz.mostrar_mensaje('Cotizando...', 'correcto');

        interfaz.mostrar_resultado(seguro, cantidad);
    }

});

const max = new Date().getFullYear(); //obtener el año actual
const min = max - 20;

//imprimir options de los años
const select_anios = document.getElementById('anio');

for (let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    select_anios.appendChild(option);
}