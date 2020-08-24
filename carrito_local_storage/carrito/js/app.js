//Variables

const cursos = document.getElementById('lista-cursos');

//carrito
const carrito = document.getElementById('carrito');
const lista_cursos_carrito = document.querySelector('#lista-carrito tbody');

const vaciar_carrito_btn = document.getElementById('vaciar-carrito');

//listeneres

cargar_event_listeners();

function cargar_event_listeners() {
    //al cargar documento, mostrar local storage
    document.addEventListener('DOMContentLoaded', cargar_info_local_storage);

    //dispara cuando se presiona "agregar carrito"
    cursos.addEventListener('click', comprar_curso);

    //cuando se lelimina un curso del carrito
    carrito.addEventListener('click', eliminar_curso);

    //para vaciar todo el carrito de compras
    vaciar_carrito_btn.addEventListener('click', vaciar_carrito);
}



//funciones

//muestra los cursos del local storage en el carrito
function cargar_info_local_storage() {

    let cursos_local_storage = obtener_cursos_local_storage();

    cursos_local_storage.forEach(function(curso_aux) {

        const row = document.createElement('tr');
        row.innerHTML = `
					<td>
						<img src="${curso_aux.imagen}" width="100">
					</td>
					<td>${curso_aux.titulo}</td>
					<td>${curso_aux.precio}</td>
					<td>
						<a href="#" class="borrar-curso" data-id="${curso_aux.id}">X</a>
					</td>
				`;
        lista_cursos_carrito.appendChild(row);

    });
}

function comprar_curso(event) {
    event.preventDefault();
    //para usar delegation en agregar carrito
    //console.log(event.target.classList);
    if (event.target.classList.contains('agregar-carrito')) { //si selecciono la opción "Agregar al carrito"
        const curso = event.target.parentElement.parentElement; // obtener el card con la info del curso para agregarlo al carrito
        //console.log(curso);

        //enviando el curso seleccionado para tomar sus datos
        leer_datos_curso(curso);
    }
}

//leer los datos del curso
function leer_datos_curso(curso) {
    const info_curso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent, //los span que están dentro de .precio
        //id: curso.querySelector('a').getAttribute('data-id') //seleccionar su atributo personalizado
        id: lista_cursos_carrito.children.length + 1
    };
    insertar_al_carrito(info_curso);
}

//muestra el curso seleccionado en el carrito
function insertar_al_carrito(info_curso) {
    //insertar el curso al table lista_carrito
    const row = document.createElement('tr');

    row.innerHTML = `
		<td>
			<img src="${info_curso.imagen}" width="100">
		</td>
		<td>${info_curso.titulo}</td>
		<td>${info_curso.precio}</td>
		<td>
			<a href="#" class="borrar-curso" data-id="${info_curso.id}">X</a>
		</td>
	`;
    lista_cursos_carrito.appendChild(row);

    //agregando al local storage
    guardar_cursos_local_storage(info_curso);
}

//elimina el curso del carrito en el DOM
function eliminar_curso(event) {
    event.preventDefault();
    //console.log("eliminando..");
    let curso, curso_id;
    if (event.target.classList.contains('borrar-curso')) {
        //eliminar el <tr></tr>
        event.target.parentElement.parentElement.remove();
        curso = event.target.parentElement.parentElement;
        //console.log(curso);

        //tomar el data-id
        curso_id = curso.querySelector('a').getAttribute('data-id');

        eliminar_curso_local_storage(curso_id);
    }
}

//elimina todos los cursos del carrito en el DOM
function vaciar_carrito(event) {
    event.preventDefault();

    //forma 1 -> forma lenta
    //lista_cursos_carrito.innerHTML = '';
    //return false;

    //forma 2 -> forma rápida y recomendada
    while (lista_cursos_carrito.firstChild) {
        lista_cursos_carrito.removeChild(lista_cursos_carrito.firstChild);
    }
    //vaciar local storage
    vaciar_local_storage();

    return false;
}

//Almacena cursos del carrito en el local storage
function guardar_cursos_local_storage(curso) {
    let cursos = obtener_cursos_local_storage();
    cursos.push(curso); // el curso seleccionado se agrega al carrito

    //actualizar local storage
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

//listar info del local storage y retorna un array format
function obtener_cursos_local_storage() {
    let cursos_local_storage;

    //comprobar si hay cursos en el local storage
    if (localStorage.getItem('cursos') === null) {
        cursos_local_storage = [];
    } else {
        cursos_local_storage = JSON.parse(localStorage.getItem('cursos'));
    }

    return cursos_local_storage;
}

//elimina el curso por el id del localStorage
function eliminar_curso_local_storage(curso_id) {
    let cursos_local_storage = obtener_cursos_local_storage();

    //el index va a ayudar a obtener la posición de cada elemento en el array, este valor se incrementará automáticamente con cada iteración
    cursos_local_storage.forEach(function(curso_aux, index) {
        if (curso_aux.id == curso_id) {
            cursos_local_storage.splice(index, 1);
        }
    });

    localStorage.setItem('cursos', JSON.stringify(cursos_local_storage));
}

//eliminar todos los cursos del local storage

function vaciar_local_storage() {
    localStorage.clear();
}