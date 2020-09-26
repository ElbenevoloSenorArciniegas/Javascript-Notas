import { imprimir_alerta } from './funciones.js';

//implementar un IIFE, para que se puedan usar las variables y funciones localmente
(function() {

    let DB;

    const listado_clientes = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () => {

        crear_DB();

        //validar si la conexión ya ha sido establecida
        if (window.indexedDB.open('crm', 1)) {

            //listar clientes
            listar_clientes();
        }

        //un event listener para saber cuando le estoy dando clic a un elemento que tiene la clase 'eliminar', para eliminar un cliente
        listado_clientes.addEventListener('click', eliminar_cliente);
    });

    function eliminar_cliente(event) {
        if (event.target.classList.contains('eliminar')) {

            //accediendo al atributo personalizado 'data-cliente' de la etiqueta
            const id_cliente = Number(event.target.dataset.cliente);

            //mostrar mensaje para confirmación
            const confirmar = confirm('¿Deseas eliminar este cliente?');

            if (confirmar) {
                const transaction = DB.transaction(['crm'], 'readwrite');
                const object_store = transaction.objectStore('crm');

                object_store.delete(id_cliente);

                transaction.oncomplete = () => {
                    console.log('Cliente eliminado');
                    imprimir_alerta('El cliente ha sido eliminado');

                    //eliminando del HTML
                    event.target.parentElement.parentElement.remove();
                }

                transaction.onerror = () => {
                    console.log('Hubo un error al eliminar el cliente');
                    imprimir_alerta('Hubo un error al eliminar el cliente', 'error');
                }

            }

        }
    }

    function crear_DB() {
        const crea_db = window.indexedDB.open('crm', 1);

        crea_db.onerror = () => {
            console.log('Hubo un error en la creacion de la db');
        }

        crea_db.onsuccess = () => {
            DB = crea_db.result;
            console.log('La base de datos fué creada exitosamente');
        }

        crea_db.onupgradeneeded = (event) => {
            const db = event.target.result;
            const object_store = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });

            object_store.createIndex('nombre', 'nombre', { unique: false });
            object_store.createIndex('email', 'email', { unique: true });
            object_store.createIndex('telefono', 'telefono', { unique: false });
            object_store.createIndex('nombre_empresa', 'nombre_empresa', { unique: false });
            object_store.createIndex('id', 'id', { unique: true });

            console.log('La base de datos ha sido configurada');
        }
    }

    function listar_clientes() {

        const abriendo_conexion = window.indexedDB.open('crm', 1);
        abriendo_conexion.onerror = () => {
            console.log('Hubo un error al abrir la conexion');
        }

        abriendo_conexion.onsuccess = () => {
            DB = abriendo_conexion.result;
            const object_store = DB.transaction('crm').objectStore('crm');

            //usando cursores para obtener info
            object_store.openCursor().onsuccess = function(event) {
                const cursor = event.target.result;

                if (cursor) {

                    //destructuring para extraer info
                    const { nombre, empresa, email, telefono, id } = cursor.value;

                    listado_clientes.innerHTML += `
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                        <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                        <p class="text-gray-700">${telefono}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                        <p class="text-gray-600">${empresa}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                    </td>
                `;


                    //para irse al siguiente registro
                    cursor.continue();
                } else {
                    console.log('Ya no hay mas registros para mostrar.');
                }
            }
        }
    }
})();