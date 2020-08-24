//archivo para las rutas a la API
//Este proyecto busca eventos de acuerdo a unos parámetros de búsqueda (categorías, ubicación y nombre)

//para este proyecto se usó la API de EvenBrite https://www.eventbrite.es/

//Para obtener acceso a la API hay que registrarse, y en la configuración del usuario sale una opción para acceder a las api keys

//info status -> https://www.eventbritestatus.com/

/*
values:

API key -> OSGNVTVWKLWBPA75LL
Client secret -> BPORYZNFKTXRYRZ5G2XDKXMTMRJT3B75NEL5HSY56PTJQ6GJ6N
Private token -> WAAU3CXJ2PY4R6YGQ33N
Public token -> TJ56V5UWHUJQ4C46LOFS 
*/

//link base para invocar la API
//https://www.eventbriteapi.com/v3/users/me/?token=MITOKEN
//MITOKEN -> my private token

//Ahora, si se quiere consultar algo, por ejemplo, categorías, de la anterior url se cambia el /users/me por la consulta, ej:
//https://www.eventbriteapi.com/v3/categories/?token=MITOKEN

//para mostrar resultados en español colocar al final de la url
//&locale=es-ES

//para consultar otros endpoints:
//https://www.eventbrite.com/platform/api#/reference/

class EventBrite {

    constructor() {
        this.token_auth = 'ND5WSSINYPOTQOSX4VW2'; //tomar el private token de la API
        this.ordenar = 'date'; // que los eventos se ordenen por fecha. este atributo se coloca para que luego se pueda modificar para que se ordene de diferentes maneras
    }

    //obtiene las categorias en init()
    async obtener_categorias() {

        //consultar las categorias a la REST API de event brite
        const respuesta = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}&locale=es-ES`);

        //esperar la rta de las categorias y devolver un json
        const categorias = await respuesta.json();

        return {
            categorias
        };
    }

    //mostrar resultados de la busqueda
    async consultar_eventos() {
        const respuesta = await fetch('');
    }
}