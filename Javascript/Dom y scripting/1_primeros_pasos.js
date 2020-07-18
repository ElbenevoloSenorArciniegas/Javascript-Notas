// Eliminar de Local Storage
//localStorage.clear();

//DOM -> Document Object Model 
//cada uno de los elementos del HTML se conocen como nodos

let elementos;

//mostrar todo el html
elemento = document;

//mostrar document como más listado
elemento = document.all;
//mostrar una sección del html enumerado con el método all
elemento = document.all[10];

//mostrar el head y body
elemento = document.head;
elemento = document.body;

//dominio del sitio
elemento = document.domain;

//url
elemento = document.URL;

//character SET (ej UTF8, unicode..)
elemento = document.characterSet;

//Acceder a los formularios, ids y clases
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[0];

//info sobre las imágenes
elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src');

//Info sobre los Scripts de js
elemento = document.scripts;

//esta info retorna un html collection, para convertirlo a array:
elemento = document.images;
let imagenes_arr = Array.from(elemento);
console.log(imagenes_arr);

//recorriendo el array de imagenes con forEach
imagenes_arr.forEach(function(imagen){
	console.log(imagen);
});

console.log(elemento);