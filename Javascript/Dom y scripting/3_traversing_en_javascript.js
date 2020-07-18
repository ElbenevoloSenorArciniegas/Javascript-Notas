//traversing -> recorrer el document de padre a hijo y del hijo al padre

//selecciona un nav con el id "principal"
let navegacion = document.querySelector('#principal');

console.log(navegacion);

//traversing del padre hacia el hijo

//mostrar los elementos (hijos) inmediatamente adentro del nodo, incluyendo los saltos de línea en el html (eso los toma como nodos text)
console.log(navegacion.childNodes);
navegacion.children[1].textContent = 'otro nuevo enlace';

//mostrar los elementos (hijo) inmediatamente adentro del nodo, sin incluír los saltos de línea en el html (eso los toma como nodos text)
console.log(navegacion.children[1].nodeName); //cada nodo es una etiqueta html

console.log(navegacion.children[1].nodeType); 
//Node type
/*
 1 - Elementos html
 2 - Atributos
 3 - Text Node
 8 - Comentarios
 9 - documentos
 10 - doctype
*/

navegacion = document.querySelector('.barra');
//puedo navegar por los hijos de sus hijos
console.log(navegacion.children[0].children);

let cursos = document.querySelectorAll('.card');

//acceder al primer y ultimo elemento de lo que yaha dentro de un nodo hijo
console.log(cursos[0].lastElementChild);
console.log(cursos[0].firstElementChild);
//cantidad de elementos del nodo hijo
console.log(cursos[0].lastChildElementCount);

//Traversing del hijo hacia el padre

let enlaces = document.querySelectorAll('.enlace');
console.log(enlaces);
console.log(enlaces[0].parentNode);

//más recomendable usar este
console.log(enlaces[0].parentElement);
console.log(enlaces[0].parentElement.parentElement);

//puede ir hacia arriba, tanto como lo permita el DOM
console.log(cursos[0].parentElement.parentElement.parentElement);
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde traversing');

//sibling

//elemento al lado de un nodo, como hijo del mismo padre del nodo actual
console.log(enlaces[4].previousElementSibling); //mas recomendado usar este
console.log(enlaces[4].previousSibling); 

console.log(enlaces[4].previousElementSibling.previousElementSibling); 

console.log(enlaces[0].nextElementSibling); 
console.log(enlaces[0].nextElementSibling.parentElement); 