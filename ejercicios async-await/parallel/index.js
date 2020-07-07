/* ejecutar esto -> node index.js */

/* ejemplo de codigo paralelo. tiempo total(suma de ambos -> 4 seg) */
/* si ocurre un error sin manejar try catch, al ser secuencial se detiene el programa */

const { taskOne, taskTwo } = require('./tasks'); /* importas las funciones de tasks.js */


async function main(){
    try{
        console.time('midiendo el tiempo');

        /* promise.all para ejecutar todos los codigos de manera paralela */
        const results = await Promise.all([taskOne(), taskTwo()])

        console.timeEnd('midiendo el tiempo');
        /* console.time y console.timeEnd mide el tiempo en un flujo de codigo, el string de parametro de ambas 
        funciones debe ser igual */

        console.log('task one returned', results[0]);
        console.log('task two returned', results[1]);

        taskTwo();
    }catch(err){
        console.log(err);
    }

}

/* la funcion main se creo porque la palabra async se debe poner dentro de funciones */
main();