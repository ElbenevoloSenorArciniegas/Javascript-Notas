/* peticiones, procesos ej consulta a la bd, una peticion http, etc, que se demorant tiempo */
const util = require('util'); /* ayuda a manejar algunas utilidades del lenguaje */

/* setTimeout maneja tiempos */
/* sleep es una funcion */
const sleep = util.promisify(setTimeout);  /*promisify ayuda a convertir funciones que se manejan con callbacks a que se manejen con promises y async-await */
                                           /* setTimeout se maneja con callbacks */
module.exports = {

    async taskOne(){
        try{
            //throw new Error('ocurrio un problema'); /* creando un nuevo error */
            await sleep(4000); /* 4 segundos */
            return 'one value';
        }catch(err){
            console.log(err);
        }
        
    },

    async taskTwo(){
        try{
            await sleep(2000);
            return 'two value';
        }catch(err){
            console.log(err);
        }
    }
}