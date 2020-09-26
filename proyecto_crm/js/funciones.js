let DB;

function imprimir_alerta(mensaje, tipo) {

    const alerta = document.querySelector('.alerta');

    //para formulario de crear-editar
    let etiqueta = document.querySelector('#formulario');

    //para la página principal
    if (!etiqueta) etiqueta = document.querySelector('.contenedor-tabla');

    //validacion para que no aparezca el mensaje repetidas veces
    if (!alerta) {
        const div_alerta = document.createElement('div');

        div_alerta.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');

        if (tipo === 'error') div_alerta.classList.add('bg-red-100', 'border-red-4000', 'text-red-700');
        else div_alerta.classList.add('bg-green-100', 'border-green-4000', 'text-green-700');

        div_alerta.textContent = mensaje;
        etiqueta.appendChild(div_alerta);

        setTimeout(() => {
            div_alerta.remove();
        }, 5000);
    }

}

function conectar_DB() {
    //abrir la conexion, o crearla, si no existe
    const abrir_conexion = window.indexedDB.open('crm');

    abrir_conexion.onerror = function() {
        console.log('Hubo un error en la conexion a la db');
    }



    abrir_conexion.onsuccess = function() {
        console.log('Se ha establecido la conexión a la base de datos.');
        DB = abrir_conexion.result;
    }
}

export { imprimir_alerta, DB, conectar_DB };