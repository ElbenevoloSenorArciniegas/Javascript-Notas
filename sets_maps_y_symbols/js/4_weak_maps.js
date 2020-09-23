//weakmaps -> muy poco utilizados
//muy utiles para mantener una serie de datos como privado
//solo acepta claves como objetos

const producto = {
    id: 10
}

const weakmap = new WeakMap();

//agregar elemento
weakmap.set(producto, 'monitor');

//no se puede iterar, ni usar metodo size, ni clear

//saber existencia de una clave
console.log(weakmap.has(producto));

//verificar existencia de las claves e imprimir el valor
console.log(weakmap.get(producto));

//eliminar elemento
console.log(weakmap.delete(producto));