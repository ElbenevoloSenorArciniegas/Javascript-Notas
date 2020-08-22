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
        const datos_moneda_cripto = resultado[criptomoneda][moneda];

        //recortar digitos de precio
        let precio = datos_moneda_cripto.PRICE.toFixed(2);

        //como se va a mostrar la ultima fecha de actualización de la moneda, en el resultado se muestra ese valor como un timestamp de unix, y hay que convertir eso hacia una fecha
        let fecha_ultima_actualizacion = new Date(datos_moneda_cripto.LASTUPDATE * 1000).toLocaleDateString('es-CO');

        //construir el template para mostrar el resultado
        let template_html = `
            <div class = "card bg-warning">
                <div class = "card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datos_moneda_cripto.FROMSYMBOL} a moneda ${datos_moneda_cripto.TOSYMBOL} es de: $${precio}</p>

                    <p>Variación del ultimo día: ${datos_moneda_cripto.CHANGEPCTDAY}</p>

                    <p>Ultima actualización: ${fecha_ultima_actualizacion}</p>
                </div>
            </div>
        `;

        //insertar el ressultado en el dom
        document.querySelector('#resultado').innerHTML = template_html;
    }

    //mostrar y ocultar spinner de carga alenviar la cotización
    mostrar_spinner = () => {

        //limpiar info de anteriores consultas
        const resultado_anterior = document.querySelector('#resultado > div');
        if(resultado_anterior){
            resultado_anterior.remove();
        }
        
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = 'block';
    }

    async ocultar_spinner () {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = 'none';
    }
}