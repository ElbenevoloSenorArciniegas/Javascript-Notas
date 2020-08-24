//instanciar ambas clases
const api = new API();
const ui = new Interfaz(); // al inicializar consulta la API para listar categorías

document.getElementById('buscarBtn').addEventListener('click', (event) => {
    event.preventDefault();

    //leer el texto del imput buscar
    const texto_buscador = document.getElementById('evento').value;
    //leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoria_seleccionada = categorias.options[categorias.selectedIndex].value;

    //console.log(texto_buscador + " " + categoria_seleccionada);

    //cuando si hay una busqueda
    api.consultar_eventos(texto_buscador, categoria_seleccionada)
        .then(respuesta => {
            if (respuesta.eventos.page.totalElements > 0) {

                ui.mostrar_eventos(respuesta.eventos._embedded.events);
            } else {
                //mostrar alert de que no hay resultados
                ui.mostrar_mensaje('alert alert-danger mt-4', 'No hay resultados referentes a tu búsqueda');
            }
        });
});