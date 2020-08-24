/*
const esperando = new Promise(function(resolve, reject) { //parametros -> resolve (cuando la promesa se cumple) y reject(cuando la promesa no se cumple)

    setTimeout(function() {
        resolve('la funcion se ejecutó exitosamente'); //después de 5 segundos se ejecutará esto
    }, 5000);
});

esperando.then(function(mensaje) {
        console.log(mensaje);
    }) //el then hace que se ejecute la parte del resolve, si todo es correcto

*/

//aplicando resolve - reject
const aplicar_descuento = new Promise(function(resolve, reject) {
    const descuento = false; // simulando error, ej solicitando datos a una API

    if (descuento) {
        resolve("descuento aplicado"); //se ejecutó correctamente
    } else {
        reject("no se puede aplicar el descuento");
    }
});

//desde acá ejecuta la promesa
aplicar_descuento.then(function(respuesta) {
    console.log(respuesta); //imprime el resolve

}).catch(function(error) {
    console.log(error); //imprime el reject
});