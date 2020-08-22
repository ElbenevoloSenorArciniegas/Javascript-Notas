//ejemplo crear un enlace debajo de otro enlace <a></a>

//crear enlace
const enlace = document.createElement('a');

//agregar una clase;
enlace.className = 'enlace';
//añadir id
enlace.id = 'nuevo-id';

//agregar atributo de href
enlace.setAttribute('href', '#');

//agregarle info para mostrar en enlace
//el appendChild sirve para agregar nuevos nodos, como el de puro texto
enlace.appendChild(document.createTextNode('Nuevo enlace'));
//esto hace lo mismo que lo anterior
enlace.textContent = 'Nuevo enlace';

//agregarlo al html
//agregarlo como hijo de menú secundario
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);