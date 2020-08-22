//este archivo conecta a los otros archivos .js

const api = new API('97b5f0c8515ffa9716736ffe7ee482e80a0940ccb942761213e4e4b1e3621bda');
const ui = new Interfaz(); // consulta la api para generar las criptomonedas existentes y listarlas en el select del formulario

//leer el formulario
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    //leer la moneda seleccionada
    const moneda_select = document.querySelector('#moneda');
    const moneda = moneda_select.options[moneda_select.selectedIndex].value;

    //leer la cripto seleccionada
    const cripto_select = document.querySelector('#criptomoneda');
    const cripto = cripto_select.options[cripto_select.selectedIndex].value;

    //comprobar que ambos campos tengan algo seleccionado
    if (moneda === '' || cripto === '') {

        //arrojar la alerta de error
        ui.mostrar_mensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    } else {
        //consultar la api para generar el balance de esa criptomoneda
        api.obtener_valores_cripto(moneda, cripto)
            .then(data => {
                console.log(data.respuesta);
                ui.mostrar_resultado(data.respuesta, moneda, cripto);
            });
    }

});


p = (texto) => console.log(texto);