//funciones IIFE -> muy utiles para llamar una función de otra parte, se ejecutan inmediatamente, sin invocaciones

//cuando una variable está siendo llamada dentro de una función IIFE en otro archivo js, esto botará error; esto es muy util para no llamar métodos ni traer variables innecesarias, evitando las mezclas de código, y manteniendo las variables y metodos privados 

/*
(function() {
    console.log('desde un IIFE');

    const nombre_cliente = 'cris';

    //para que las variables dentro de esta función puedan ser accedidas desde la ventana global, o otros archivos
    window.nombre = 'Cris';
})();
*/

//Export -> para exportar variables o funciones a otros archivos
//para que funcione esta palabra reservada al igual que con 'import', hay que colocarle un atributo en la etiqueta html donde se está incrustando el archivo js, llamado 'type="module"'
export const nombre_cliente = 'cris';
export const ahorro = 200;

//exportar una function
export function mostrar_info(nombre, ahorro) {
    return `${nombre}, ${ahorro}`;
}

//exportar clases
export class Cliente {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrar_info() {
        return `${this.nombre}, ${this.edad}`;
    }
}

//export default -> solo se puede colocar un export default por archivo

/*export default function nueva_funcion() {
    console.log('este es un export default');
}*/

//se puede dejar ese export default sin nombre, igual al importarlo se le va a asignar un alias

export default function() {
    console.log('este es un export default');
}