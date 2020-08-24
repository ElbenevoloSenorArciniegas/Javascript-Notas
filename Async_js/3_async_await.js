//async await (EC7) no es soportado por todos los navegadores

async function obtener_clientes() {

    //crear un promise
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('clientes descargados...');
        }, 2000);
    });

    //error o no..
    //La ejecucion del codigo de esta función empieza acá
    const error = false;
    if (!error) {
        const respuesta = await clientes; // el await espera el promise hasta que haya hecho la simulacion de "descargar clientes", y luego si continúa ejecutando el código
        return respuesta;
    } else {
        await Promise.reject('Hubo un error...');
    }
}

obtener_clientes()
    .then(res => console.log(res))
    .catch(error => console.log(error)); // acá imprimiría el promise reject