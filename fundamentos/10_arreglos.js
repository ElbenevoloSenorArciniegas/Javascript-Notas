//Crear un arreglo

const numeros = [10,20,30,40,50];
//console.log(numeros);

//Arreglo de Strings (método alternativo)

const meses = new Array("enero", "febrero", "marzo", "abril", "mayo");

//tamaño del arreglo
console.log(meses.length);

//comprobar si es un array
console.log(Array.isArray(meses));

//Accediendo a los índices
console.log(meses[1]);

//Agregando nuevos elementos (aunque el arreglo sea const, los índices si se pueden
//modificar, agregar, editar, o eliminar... , más el arreglo como tal no se puede volver a inicializar)
meses[5] = 'junio';
meses.push('julio');

//Buscando elementos en un arreglo
//indexOf retorna la posición de un elemento del arreglo, si ese elemento existe
console.log(meses.indexOf('abril'));

//agregar al inicio del arreglo
meses.unshift('mes 0');

//eliminar elementos de un arreglo

//eliminando del tope
meses.pop();

//eliminando del inicio del arreglo
meses.shift();

//eliminar varios elementos en un rango
//en el ejemplo se elimina de la posición 2, 2 elementos más
meses.splice(2,2);

//revertir el orden de los elementos
meses.reverse();

console.log(meses);

//unir un arreglo con otro
let arreglo1 = [1,2,3],
    arreglo2 = [9,8,7];

console.log(arreglo1.concat(arreglo2));

//ordenar un arreglo
const frutas = ['platano', 'manzana', 'fresa', 'naranja'];
frutas.sort();
console.log(frutas);

//ordenar un Arreglo de números
arreglo1 = [3,9,91,92,23,45,21,56,1,100,10];
arreglo1.sort();
console.log(arreglo1);

//js ordena números de otra forma por lo tanto es más conveniente crear una funcion
arreglo1.sort(function(x, y){
	return x - y; //de menor a mayor
});
console.log(arreglo1);

arreglo1.sort(function(x, y){
	return y - x; //de mayor a menor
});
console.log(arreglo1);



//Arreglo Mezclado

//const mezclado = ['Hola', 20, true, null, false, undefined];
//console.log(mezclado);


