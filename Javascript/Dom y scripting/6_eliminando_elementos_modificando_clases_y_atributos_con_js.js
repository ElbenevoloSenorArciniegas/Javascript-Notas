//un elemento puede ser eliminado por sí mismo o por su padre

const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal'); //navegacion es el padre de enlaces

enlaces[0].remove(); // lo elimina del html

console.log(enlaces); // no se modifica la elimicación del nodo

navegacion.removeChild(enlaces[1]); // eliminando nodo tomando como referencia al padre
console.log(navegacion);

//eliminando atributos y clases

const primera_lista = document.querySelector('.enlace'); 

let elemento;

//obtener una clase de CSS
elemento = primera_lista.className;
//agregando y eliminando una clase
elemento = primera_lista.classList.add('nueva-clase');
elemento = primera_lista.classList.remove('nueva-clase');
elemento = primera_lista.classList; //retorna un DOM token list, que es como un tipo de arreglo, con la info de todas las clases relacionadas al elemento

//leer atributos de un elemento
elemento = primera_lista.getAttribute('href'); //obtener el link
elemento = primera_lista.setAttribute('href', 'http://google.com');

//agregando atributos personalizados
elemento = primera_lista.setAttribute('data-id', 20);
elemento = primera_lista.setAttribute('data-algo_mas', 'algo');

//comprobando la existencia de algún atributo dentro de un elemento
console.log(primera_lista.hasAttribute('data-id'));

//eliminando atributos
elemento = primera_lista.removeAttribute('data-id')

console.log(primera_lista);
