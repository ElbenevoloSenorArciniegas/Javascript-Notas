//este archivo contiene toda la parte de la fetchAPI
//se usó esta api -> https://min-api.cryptocompare.com/

class API {
    constructor(api_key) {
        this.api_key = api_key
    }

    async obtener_monedas_api() {
            const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.api_key}`;

            const url_obtener_monedas = await fetch(url);

            //respuesta en json
            const monedas = await url_obtener_monedas.json();

            return {
                monedas
            };
        }
        //consultar la api para obtener el balance actual de la criptomoneda en la moneda que elijamos
        //https://min-api.cryptocompare.com/documentation?key=Price&cat=multipleSymbolsFullPriceEndpoint
    async obtener_valores_cripto(moneda, criptomoneda) {

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.api_key}`;

        //consultar en rest API
        const url_convertir = await fetch(url);
        const respuesta = url_convertir.json().RAW;

        return {
            respuesta
        };
    }
}