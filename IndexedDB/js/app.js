let DB;

document.addEventListener('DOMContentLoaded', (event) => {
    crmDB();

    setTimeout(() => {
        crear_cliente();
    }, 5000);
});

//muestra las funcionalidades de indexedDB
console.log(window.indexedDB);


function crmDB(event) {
    //Crear una base de datos version 1.0
    //parametros de open -> nombre de la db, version
    let crmDB = window.indexedDB.open('crm', 1);

    //verificar si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error en la base de datos');
    };

    //verificar si se creó bien
    crmDB.onsuccess = function() {
        console.log('Base de datos creada exitosamente');

        DB = crmDB.result;
    };

    //configuración dela base de datos
    //se ejecuta 1 sola vez, al crear la bd por primera vez
    crmDB.onupgradeneeded = function(event) {
        //console.log('Este metodo solo se ejecuta una sola vez');

        //esto imprime la info de la bd
        //console.log(event.target.result);

        const db = event.target.result;

        //object store es quien va a interactuar con la base de datos

        //parametros de esa funcion -> nombre de la db y una configuracion
        const object_store = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true //insertar ids autoincrementables

        });

        //Definir las columnas
        //parametros -> nombre de la columna, identificador para la columna, y algunas configuraciones. el unique es para definir si quiero elementos repetidos
        object_store.createIndex('nombre', 'nombre', { unique: false });
        object_store.createIndex('email', 'email', { unique: false });
        object_store.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creadas');
    }
}

//index db funciona con transacciones, hasta que no se cumplan una serie de requisitos, no se podrá acceder o verificar ciertas operaciones, por ejemplo, verificación de usuarios

function crear_cliente() {

    //parametros de esa funcion -> nombre de la db, tipo de operacion (readwrite, readonly si solo quiero consultar)
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function() {
        console.log('Transacción completada');
    }

    transaction.onerror = function() {
        //verificando posible repetición de valores
        console.log('Hubo un error en la transacción');
    }

    const object_store = transaction.objectStore('crm');

    const nuevo_cliente = {
        telefono: 124994492,
        nombre: 'Cris',
        email: 'correo@gmail.com'
    };

    /**operaciones
     * add -> agregar
     * put -> actualizar
     * delete -> eliminar
     */
    const peticion = object_store.add(nuevo_cliente);
    console.log(peticion);
}