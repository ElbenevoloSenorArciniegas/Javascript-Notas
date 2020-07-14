//Window object es la ventana del navegador web

//window almacena todas las propiedades de la ventana del usuario y desde ahí una aplicación 
//puede acceder a su info para darle sugerencias como en lapublicidad, o también puede 
//conocer el tipo de dispositivo y SO que usa el user para la versión de una aplicación que 
//vaya a instalar


//imprimiendo cositas en la consola del navegador
//window

//algunos elementos pertenecientes al window object

//window.console.log('hola');
//window.alert('hola');

//promt
//const nombre = prompt();
//console.log(`Bienvenido ${nombre}`);

//confirm
/*
if(confirm('Eliminar?')){
	console.log('Eliminado');
}else{
	console.log('Nada pasó');
}
*/

//ver info del navegador

//altura y anchura de la ventana. Es más recomendable usar css para modificar cosas con
//las dimensiones de la ventana

let altura, anchura;

altura = window.outerHeight;
anchura = window.outerWidth;

console.log(`${altura} ${anchura}`);

//altura y anchura de la ventana, restandole la interfaz del navegador

altura = window.innerHeight;
anchura = window.innerWidth;

console.log(`${altura} ${anchura}`);

//ubicación (url)

let ubicacion = window.location;

//el location tiene muchas propiedades

let host = window.location.host;
console.log(ubicacion);
console.log(host);

//query -> en el caso que la url tenga una query ej http:// ..... ?s=query, enviando 
//parámetros por medio de get
let query = window.location.search;
console.log(query);

//para redireccionar una página
//window.location.href = 'http://google.com';

//algunas funciones del History object

//se va hacia dos ventanas atrás en el historial
//window.history.go(-2);

//navigator -> mostrar más info con respecto al navegador web y más info

let navigator = window.navigator;

//ej el idioma en que el usuario tiene configurado su computador
navigator = window.navigator.language;
console.log(navigator);