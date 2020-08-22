//seleccionar un elemento con getElementbyid

let elemento;

elemento = document.getElementById('hero');
elemento = elemento.id;
elemento =  document.getElementById('header').className;

let encabezado;

encabezado = document.getElementById('encabezado');
//encabezado = encabezado.textContent; // el texto que contenga un elemento, si lo hay
//encabezado = document.getElementById('encabezado').innerText;

//modificarle css a cualquier elemento
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

//modificar el text context
encabezado.textContent = 'Los mejores cursos';
encabezado.innerText = 'Los mejores cursos';


//console.log(encabezado);

//seleccionar un elemento con Query Selector
//también se le pueden pasar como parámetro los selectores de CSS3 y los de Jquery

let encabezado2 = document.querySelector('#encabezado'); // # para los id

//también modificarle css a cualquier elemento
encabezado.style.background = '#444';

//también puede modificar el text context
encabezado.textContent = 'Los mejores cursos';

//query selector también puede seleccionar clases de html
encabezado2 = document.querySelector('.encabezado'); // . para las clases


//si hay varias repeticiones de la misma clase, va a tomar el primero que encuentre en el html
let enlace = document.querySelector('.enlace');

//seleccionar por etiquetas de html
encabezado2 = document.querySelector('h1');

//hacer apropiación de selectores de css3 en el query selector

let imagen = document.querySelector('.card img'); //la primera img que aparezca dentro de un 
											      //elemento .card

let enlace2 = document.querySelector('#principal a:first-child');
enlace2 = document.querySelector('#principal a:last-child');
enlace2 = document.querySelector('#principal a:nth-child(3)'); // el tercer <a></a> dentro de #principal


//para seleccionar todas las existencias de una elemento

enlace = document.querySelectorAll('.enlace');
enlace = document.querySelectorAll('#principal .enlace');

enlace[1].style.color = 'red';
enlace[1].textContent = 'Nuevo enlace 2';

//seleccionar los enlaces impares y ponerles fondo rojo
enlace = document.querySelectorAll('#principal a:nth-child(odd)');

enlace.forEach(function(impares){
	impares.style.backgroundColor = 'red';
	impares.style.color = 'white';
});

console.log(enlace);

//seleccionar un elemento con getElementsbyClassName, para seleccionar clases

//este método retorna todas las existencias de una clase
let enlaces = document.getElementsByClassName('enlace');

enlaces = enlaces[0];

//agregado css
enlaces.style.background = '#333';
enlaces.textContent = 'Nuevo enlace';


//mezclar QuerySelector con getElementsByClassName

let lista_enlaces = document.querySelector('#principal')
.getElementsByClassName('enlace');


//seleccionar un elemento con getElementsbytagsname
//esto retorna un objeto (colección) con clave numérica
let links = document.getElementsByTagName('a'); 

//modificarle su css
links[18].style.color = 'red';
links[18].textContent = 'Nuevo enlace 2';

//convertir a array
/*
let enlaces_links = Array.from(links);
enlaces_links.forEach(function(enlace){
	console.log(enlace);
	console.log(enlace.textContent);
});
*/

console.log(enlace);