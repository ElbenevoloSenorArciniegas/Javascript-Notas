//archivo para las rutas a la API
//Este proyecto busca eventos de acuerdo a unos parámetros de búsqueda (categorías, ubicación y nombre)

//para este proyecto se usó la API de TicketMaster -> https://developer.ticketmaster.com
//al crear una cuenta, el acceso a esa cuenta se limita a 5 dias en versión free



class API {

    constructor() {
        this.api_key = 'zsL3po8j8tMKHEzlZa3m25vsL2pU9GiQ';
        this.orden = 'date,name,asc'; // que los eventos se ordenen por fecha. este atributo se coloca para que luego se pueda modificar para que se ordene de diferentes maneras
    }

    //obtiene las categorias en init()
    async obtener_categorias() {

        //consultar las categorias a la REST API
        const respuesta = await fetch(`https://app.ticketmaster.com/discovery/v2/classifications?apikey=${this.api_key}&locale=*`);

        //esperar la rta de las categorias y devolver un json
        const categorias = await respuesta.json();

        return {
            categorias
        };
    }

    //mostrar resultados de la busqueda
    async consultar_eventos(texto_buscador, categoria_seleccionada) {
        const respuesta = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${this.api_key}&keyword=${texto_buscador}&locale=*&sort=${this.orden}&classificationName=${categoria_seleccionada}`);

        const eventos = await respuesta.json();
        return {
            eventos
        };
    }
}