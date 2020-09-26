import { imprimir_alerta, conectar_DB, DB } from './funciones.js';

let id_cliente;

(function() {

    const nombre_input = document.querySelector('#nombre');
    const email_input = document.querySelector('#email');
    const telefono_input = document.querySelector('#telefono');
    const empresa_input = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');


    document.addEventListener('DOMContentLoaded', () => {

        //conectar db
        conectar_DB();

        //actualizar el registro de cliente
        formulario.addEventListener('submit', actualizar_cliente);


        //extraer el id de la url
        const parametros_url = new URLSearchParams(window.location.search);
        id_cliente = parametros_url.get('id');
        //console.log(id_cliente);

        if (id_cliente) {
            setTimeout(() => {
                obtener_cliente(id_cliente);
            }, 500);
        }
    });

    function obtener_cliente(id_cliente) {
        const transaction = DB.transaction(['crm'], 'readonly');
        const object_store = transaction.objectStore('crm');

        //console.log(object_store);
        const cliente = object_store.openCursor();
        cliente.onsuccess = function(event) {
            const cursor = event.target.result;

            //buscando el cliente con la id especifica
            if (cursor) {
                if (cursor.value.id === Number(id_cliente)) {
                    //mostrar en el editor
                    llenar_formulario(cursor.value);
                }

                cursor.continue();
            }
        }
    }

    //llenando formulario para el modo edicion
    function llenar_formulario(cliente) {

        const { nombre, email, telefono, empresa } = cliente;

        nombre_input.value = nombre;
        email_input.value = email;
        telefono_input.value = telefono;
        empresa_input.value = empresa;
    }

    function actualizar_cliente(event) {
        event.preventDefault();

        if (nombre_input.value === '' || email_input.value === '' || empresa_input.value === '' || telefono_input.value === '') {
            console.log('Debe llenar todos los campos');
            imprimir_alerta('Debe llenar todos los campos', 'error');

            return;
        }

        const cliente_actualizado = {
            nombre: nombre_input.value,
            email: email_input.value,
            empresa: empresa_input.value,
            telefono: telefono_input.value,
            id: Number(id_cliente)
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const object_store = transaction.objectStore('crm');

        object_store.put(cliente_actualizado);
        transaction.oncomplete = () => {
            console.log('cliente actualizado');
            imprimir_alerta('cliente actualizado');

            //redireccionar
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 2000);
        }

        transaction.onerror = () => {
            console.log('Hubo un error al realizar la actualizacion');
            imprimir_alerta('Hubo un error', 'error');
        }

    }
})();