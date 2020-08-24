//instanciar ambas clases
const evenbrite = new EventBrite();
const ui = new Interfaz(); // al inicializar consulta la API para listar categorías

document.getElementById('buscarBtn').addEventListener('click', (event) => {
    event.preventDefault();

    //leer el texto del imput buscar
    const texto_buscador = document.getElementById('evento').value;
    //leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoria_seleccionada = categorias.options[categorias.selectedIndex].value;

    //console.log(texto_buscador + " " + categoria_seleccionada);

    //revisar campos obligatorios
    if (texto_buscador !== '') {
        //cuando si hay una busqueda
        evenbrite.consultar_eventos(texto_buscador, categoria_seleccionada);
    } else {
        ui.mostrar_mensaje('alert alert-danger mt-4', 'Debes escribir el nombre del evento o la ciudad del evento');
    }
});