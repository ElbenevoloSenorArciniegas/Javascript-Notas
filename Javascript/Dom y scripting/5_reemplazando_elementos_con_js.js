//reemplazar elementos

const nuevo_encabezado = document.createElement('h2');
nuevo_encabezado.id = 'encabezado';
nuevo_encabezado.appendChild(document.createTextNode('Los mejores cursos'));

//el elemento anterior será reemplazado
const anterior = document.querySelector('#encabezado');

//debo tomar como referencia al padre para reemplazarlo
const elemento_padre = document.querySelector('#lista-cursos');

//reemplazar
elemento_padre.replaceChild(nuevo_encabezado, anterior);