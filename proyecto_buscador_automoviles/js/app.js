//variables
const resultado = document.querySelector('#resultado');

//selects
const anio = document.querySelector('#year'); //select de años
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const anio_max = new Date().getFullYear();
const anio_min = anio_max - 10;

//un objeto donde el user almacena las variables y parámetros de busqueda
const datos_busqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//event listeners

//al cargar el html, mostrar todos los autos
document.addEventListener('DOMContentLoaded', ()=>{
    //autos es la variable que almacena la info de los autos, en db.js
    mostrar_autos(autos); //muestra los automoviles al cargar la pagina

    //llenar las opciones de años
    llenar_select_anios();
});

//events listeners para los formularios de busqueda
marca.addEventListener('change', event =>{
    datos_busqueda.marca = event.target.value;
    
    filtrar_auto();
});

anio.addEventListener('change', event =>{
    datos_busqueda.year =  parseInt(event.target.value);
    filtrar_auto();
});

minimo.addEventListener('change', event =>{
    datos_busqueda.minimo = event.target.value;
    filtrar_auto();
});

maximo.addEventListener('change', event =>{
    datos_busqueda.maximo = event.target.value;
    filtrar_auto();
});

puertas.addEventListener('change', event =>{
    datos_busqueda.puertas = parseInt(event.target.value);
    filtrar_auto();
});

transmision.addEventListener('change', event =>{
    datos_busqueda.transmision = event.target.value;
    filtrar_auto();
});

color.addEventListener('change', event =>{
    datos_busqueda.color = event.target.value;
    filtrar_auto();
});


//funciones

function mostrar_autos(autos_aux){
    
    //eliminar html previo
    limpiar_HTML();
        autos_aux.forEach(auto =>{
            const autoHTML = document.createElement('p');

            const {marca, modelo, year, puertas, transmision, precio, color} = auto;

            autoHTML.textContent = `
                ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
            `;

            //insertar en el HTML
            resultado.appendChild(autoHTML);
        });
}

function no_resultado(){

    limpiar_HTML();

    const mensaje_no_autos = document.createElement('div');
    mensaje_no_autos.classList.add('alerta', 'error');
    mensaje_no_autos.textContent = 'No hay resultado, intenta con otros términos de búsqueda';
    resultado.appendChild(mensaje_no_autos);
}

//limpiar html resultados
function limpiar_HTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//genera los años del select
function llenar_select_anios(){
    for (let i = anio_max; i >= anio_min; i--){
        const opcion_anio = document.createElement('option');
        opcion_anio.value = i;
        opcion_anio.textContent = i;

        //agregando al select de años
        anio.appendChild(opcion_anio);
    }
}

//funcion que filtra en base a la busqueda
function filtrar_auto(){

    //autos es la variable que almacena la info de los autos, en db.js
    const resultado = autos.filter(filtrar_marca).filter(filtrar_anio).filter(filtrar_minimo).filter(filtrar_maximo).filter(filtrar_puertas).filter(filtrar_transmision).filter(filtrar_color); //este es un ejemplo de high order functions; a su vez, se puede usar encadenamiento (filter sobre filter)

   // console.log(resultado);
   if(!resultado.length) no_resultado();
   else mostrar_autos(resultado);
}

//auto es cada iteracion de autos pasado en el metodo filter
function filtrar_marca(auto){
    //console.log(auto);
    const { marca } = datos_busqueda;
    if(marca){
        return auto.marca === marca;
    }

    //esto es para cuando el usuario no seleccione una marca específica en su filtro de busqueda, entonces que muestre todos los autos y no se filtre por la marca
    return auto;
}

function filtrar_anio(auto){
    const { year } = datos_busqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}

function filtrar_minimo(auto){
    const { minimo } = datos_busqueda;
    if(minimo){
        //se debe revisar desde ese precio mínimo hacia arriba
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrar_maximo(auto){
    const { maximo } = datos_busqueda;

    if(maximo){

        //no hay necesidad de hacer conversion de string a int para hacer esta comparacion, porque no se usan comparadores estrictos
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrar_puertas(auto){
    const { puertas } = datos_busqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrar_transmision(auto){
    const { transmision } = datos_busqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrar_color(auto){
    const { color } = datos_busqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}

