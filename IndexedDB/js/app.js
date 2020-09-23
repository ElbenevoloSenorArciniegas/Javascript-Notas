document.addEventListener('DOMContentLoaded', () => {
    crmDB();
});

//muestra las funcionalidades de indexedDB
console.log(window.indexedDB);


function crmDB() {
    //Crear una base de datos version 1.0
    //parametros de open -> nombre de la db, version
    let crmDB = window.indexedDB.open('crm', 1);

    //verificar si hay un error

    //verificar si se creó bien

    //configuación
}