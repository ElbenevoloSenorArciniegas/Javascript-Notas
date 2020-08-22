//este archivo contiene los elementos de la interfaz gráfica, alerts, resultados

class Interfaz {

    constructor() {
        this.inicializar();
    }

    inicializar = () => {
        this.construir_select();
    }

    construir_select = () => {
            api.obtener_monedas_api() //carga todas las criptomonedas de la API 
                .then(monedas => {
                    //console.log(monedas.monedas.Data); // retorna un objeto de objetos, pero no se puede recorrer con forEach

                    //console.log(Object.entries(monedas.monedas.Data)); // convertir a array de arrays, se puede recorrer con for

                    for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                        const select = document.querySelector('#criptomoneda');
                        //añadir el symbol y el name (valores de la respuesta a la solicitud) como opciones en el select
                        const opcion = document.createElement('option');
                        opcion.value = value.Symbol;
                        opcion.appendChild(document.createTextNode(value.CoinName));

                        //agregr la criptomoneda en el select
                        select.appendChild(opcion);
                    }

                })
        }
        //Mostrar alerts
    mostrar_mensaje = (mensaje, clases) => {

        const div = document.createElement('div');
        div.className = clases; //agregarle una clase personalizada (alert success o alert error)
        div.appendChild(document.createTextNode(mensaje));

        //seleccionar mensajes donde se mostrará
        const div_mensaje = document.querySelector('.mensajes');
        //mostrar el mensaje
        div_mensaje.appendChild(div);

        //eliminando alert
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    mostrar_resultado = (resultado, moneda, criptomoneda) => {
        //console.log(resultado);
    }
}