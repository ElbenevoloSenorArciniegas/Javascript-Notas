//Este ejemplo funcionó usando un live server en vs code

// AJAX es buena opción para recargar cierta información sin recargar página

//cargar contenido del datos.txt
document.getElementById('cargar').addEventListener('click', cargar_datos);

function cargar_datos() {

    // Con este objeto (XMLHttpRequest), se pueden utilizar todos los métodos para comunicación con AJAX (ej. a donde nos cominicamos, mandar datos..)
    // puede manejar o leer no solo txt, sino, xml, de un json o de un Rest API, etc
    const xhr = new XMLHttpRequest();

    //Abrir una conexión
    //parámetros
    // xhr.open(tipo_solicitud, url, si_es_asíncrona(la petición));
    xhr.open('GET', 'datos.txt', true);

    //una vez que carga la página, quiero verificar el estado y el contenido del response

    //de la forma antigua
    xhr.onreadystatechange = function() {
        /**
         * Ready states
         * 0 -> no inicializado
         * 1 -> conexion estabelcida
         * 2 -> recibido
         * 3 -> procesado
         * 4 -> respuesta lista
         */
        // siempre va a pasar por los 5 estados, pero nos interesa cuando esté en la 4
        //console.log(`Estado: ${this.readyState}`);

        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('listado').innerHTML = `<h1>${(this.responseText)}</h1>`;
        }
    };

    //De la forma reciente
    /*xhr.onload = function() {
        //revisando el status
        /*
        200 -> correcto
        403 -> prohibido
        404 -> no encontrado
        ...
        */
    /* 
        if (this.status === 200) {
            document.getElementById('listado').innerHTML = `<h1>${(this.responseText)}</h1>`;
        }
    };*/

    //Enviar el request
    xhr.send();
}