//esperar a que un usuario haga una accion sobre un elemento para que ocurra un evento

//ejemplo. evento para cuando haga clic en un opción "buscar" (en un formulario)
//event -> es lo que pasa como parámetro para que en el js se realicen acciones con ese evento

//document.querySelector('#submit-buscador').addEventListener('click', function(event){

//el prevent default detiene la ejecución por default de un evento, por ejemplo si es un link y que ese link redireccione a otro sitio
// al detener la acción por default, nos permite agregar acciones personalizadas
//	event.preventDefault();
//	alert('buscando cursos');

//el event listener puede servir muy bien para validar datos antes de enviarlos al backend
//});

//uno de los event listeners mas usados, este event listener se ejecuta cuando termina de cargar todo el html y el codigo js que se ejecute afuera automaticamente
document.addEventListener("DOMContentLoaded", () => {
  console.log("Documento listo");
});

function ejecutar_boton(event) {
  event.preventDefault();
  //alert('Desde la función ejecutar botón');

  let elemento;

  //cosas que contiene ese event
  //en este caso será un Mouse event
  elemento = event;

  //mostrar el elemento como etiqueta html y sus propiedades, y con ese target puedo acceder a todas las funciones del dom como sus hijos, padres, etc etc
  elemento = event.target;

  elemento = event.target.id;
  elemento = event.target.className;
  elemento = event.target.innerText;

  console.log(elemento);
}

//puedo agregar la ejecución de un event listener fuera de el
document
  .querySelector("#submit-buscador")
  .addEventListener("click", ejecutar_boton);

document
  .querySelector("#encabezado")
  .addEventListener("click", function (event) {
    //como le hice clic a un texto, no tiene conigurado una accion por defecto, por lo tanto no necesito el eventDefault

    console.log(event.target.innerText);

    //puedo modificar el DOM con los event listeners
    event.target.innerText = "Nuevo Encabezado";
    event.target.innerText = 5 + 5;
  });

//otros eventos con el mouse

const encabezado = document.querySelector("#encabezado");
const enlaces = document.querySelectorAll(".enlace");

const boton = document.querySelector("#vaciar-carrito");

//click
//boton.addEventListener('click', obtener_evento);

//doble click
//boton.addEventListener('dblclick', obtener_evento);

//mouse enter -> solo es pasar el mouse por el elemento
//boton.addEventListener('mouseenter', obtener_evento);

//mouse leave -> cuando quito el mouse del elemento
//boton.addEventListener('mouseleave', obtener_evento);

//mouse over -> similar al anterior
//boton.addEventListener('mouseover', obtener_evento);

//mouse out
//boton.addEventListener('mouseout', obtener_evento);

//mouse down -> parecido al de clic, se ejecuta cuando mantengo sostenido el clic
//boton.addEventListener('mousedown', obtener_evento);

//mouse up -> cuando suelto al hacer clic
//boton.addEventListener('mouseup', obtener_evento);

//mouse move -> se ejecuta el el event listener tantas veces como mueva el mouse dentro del elemento
//encabezado.addEventListener('mousemove', obtener_evento);

function obtener_evento(event) {
  console.log(`EVENTO: ${event.type}`);
}

//Eventos para los inputs

//#buscador es el id de un input
const busqueda = document.querySelector("#buscador");

//key down -> cada vez que escribo en un input, se ejecuta el event listener
//este tipo de event listener es muy bueno para cuando haga búsquedas en directorios o países, etc
//busqueda.addEventListener('keydown', obtener_evento_2);

//key up -> muy similar al anterior, se ejecuta cada vez que suelte una tecla
//busqueda.addEventListener('keyup', obtener_evento_2);

//key press-> muy similar al anterior, se ejecuta cada vez que presione una tecla
//busqueda.addEventListener('keypress', obtener_evento_2);

//focus -> cada vez que haga clic dentro del input
//busqueda.addEventListener('focus', obtener_evento_2);

//blur -> lo contrario de focus, cuando hago clic fuera de ese input
//el blur puede servir, por ejemplo, para que cuando un usuario se salga de ese input, pueda validar los caracteres, por ejemplo, si es una contraseña, se puede valirdar que tengan mayúsculas, minúsculas y números
//también puede ser muy útil para validar campos obligatorios
//busqueda.addEventListener('blur', obtener_evento_2);

// estos eventos pueden servir muy bien, por ejemplo, para restringir al usuario de copiar y pegar texto en un formulario
//cut -> cuando el usuario selecciona todo el texto y corta
//busqueda.addEventListener('cut', obtener_evento_2);

//copy
//busqueda.addEventListener('copy', obtener_evento_2);

//paste -> cuando pego texto en el input
//busqueda.addEventListener('paste', obtener_evento_2);

//input -> se ejecuta cuando ocurren cualquiera de los eventos del input (todos los mencionados anteiormente)
//busqueda.addEventListener('input', obtener_evento_2);

//change -> es más usado en los <selects>, cuando cambio de opción

/*

busqueda.addEventListener('change', obtener_evento_2);

function obtener_evento_2(event){
	//console.log(busqueda.value);

	//modificando otros elementos del dom en vivo, al escribir en un input
	//document.querySelector('#encabezado').innerText = busqueda.value;

	console.log(`EVENTO: ${event.type}`);
}

*/

//event bubbling

//como una burbuja de eventos

//como un efecto dominó. al hacer clic al algo, no solo ocurre el evento sobre ese elemento, sino sobre otros elementos seleccionaods

const card = document.querySelector(".card");
const info_curso = document.querySelector(".info-card");
const agregar_carrito = document.querySelector(".agregar-carrito");

//orden de padres a hijos
//card > info_curso > agregar_carrito

// cuando haga clic en agregar_al_carrito, como agregar_al_carrito a su vez está dentro
// del elemento info_curso, también se ejecuta el event listener de info_curso y como a su
// vez info_curso está dentro de card, también se ejecutará el event listener de card.

//hay que tener mucho cuidado con esto, porque depronto ocasione que se ejecuten event
//listeners que no quiera que se ejecuten al estar anidados dentro de otro elemento con
//event listeners

//ahora el metodo event.stopPropagation(); me puede ayudar a no ocurra el event bubbling

/*

card.addEventListener('click', function(event){
	event.stopPropagation();
	console.log('click en card');
});

info_curso.addEventListener('click', function(event){
	event.stopPropagation();
	console.log('click en info curso');
});

agregar_carrito.addEventListener('click', function(event){
	event.stopPropagation();
	console.log('click en agregar a carrito');
});

*/

//Delegation -> es una forma de comprobar a qué elemento le estoy haciendo clic y ejecutar acciones de acuerdo a validaciones sobre ele elemento

//ej un evento para cuando haga clic en cualquier parte del documento, se elimine el elemento al que le hice click
//ej 2 -> un evento de eliminar del carrito de compras cuando haga clic
document.body.addEventListener("click", eliminar_elemento);

function eliminar_elemento(event) {
  event.preventDefault();

  console.log("Click!");
  console.log(event.target.classList); //listando todas las clases relacionadas a ese elemento

  //buscar si un classList contiene un elemento
  if (event.target.classList.contains("borrar-curso")) {
    console.log("si");
    console.log(event.target.parentElement.parentElement.remove());
  } else console.log("no");

  // simulación de agregar cursos al carrito
  if (event.target.classList.contains("agregar-carrito")) {
    console.log("Agregando curso");

    setTimeout(function () {
      console.log("Curso agregado al carrito");
    }, 3000);
  }
}

/**
 * Eventos al hacer scroll con el mouse
 * eventos que al hacer scroll muestran animaciones
 * window.addEventListener('scroll', ()=>{
 * 		console.log('scrolling');
 * 		//para saber cuanto le he dado scroll en vertical
 * 		const cnt_scroll_px = window.scrollY;
 *
 *    //para saber cuanto le he dado scroll en horizontal
 * 		const cnt_scroll_py = window.scrollX;
 * });
 * TIPOS DE EVENTOS
 * scroll -> cualquier scroll
 *
 */
