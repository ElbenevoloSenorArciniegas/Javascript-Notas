import { imprimir_alerta, conectar_DB, DB } from './funciones.js';

(function() {

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectar_DB();

        formulario.addEventListener('submit', validar_cliente);
    });

    //validar los campos de los inputs
    function validar_cliente(event) {
        event.preventDefault();

        //leer imputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;


        if (nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimir_alerta('Se deben validar todos los campos', 'error');
            return;
        }

        //crear un objeto con la informacion
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id: Date.now()
        }

        crear_nuevo_cliente(cliente);
    }

    function crear_nuevo_cliente(cliente) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const object_store = transaction.objectStore('crm');

        object_store.add(cliente);

        transaction.onerror = () => {
            console.log('Hubo un error al agregar elemento a la db');
            imprimir_alerta('Hubo un error al registrar. Debe colocar correos no registrados y rellenar todos los campos', 'error');
        };

        transaction.oncomplete = () => {
            console.log('Cliente agregado a la bd');
            imprimir_alerta('El cliente se agregó correctamente');

            //redireccionar
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 2000);
        };
    }


})();