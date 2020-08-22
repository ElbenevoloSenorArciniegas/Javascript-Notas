/* ejecutar esto -> node index.js */

/* ejemplo de codigo secuencial. tiempo total(suma de ambos -> 6001.622ms) */
/* si ocurre un error sin manejar try catch, al ser secuencial se detiene el programa */
/* con el uso del try catch, el flujo del programa no se detiene abruptamente */
const { taskOne, taskTwo } = require('./tasks'); /* importas las funciones de tasks.js */


async function main(){
    try{
        console.time('midiendo el tiempo');
        const valueOne = await taskOne();
        const valueTwo = await taskTwo();
        console.timeEnd('midiendo el tiempo');

        /* console.time y console.timeEnd mide el tiempo en un flujo de codigo, el string de parametro de ambas 
        funciones debe ser igual */

        console.log('task one returned', valueOne);
        console.log('task two returned', valueTwo);

        taskTwo();
    }catch(err){
        console.log(err);
    }

}

/* la funcion main se creo porque la palabra async se debe poner dentro de funciones */
main();