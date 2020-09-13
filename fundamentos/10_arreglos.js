//Crear un arreglo

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

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
meses[5] = "junio";
meses.push("julio");

//Buscando elementos en un arreglo
//indexOf retorna la posición de un elemento del arreglo, si ese elemento existe
console.log(meses.indexOf("abril"));

//agregar al inicio del arreglo
meses.unshift("mes 0");

//eliminar elementos de un arreglo

//eliminando del tope
meses.pop();

//eliminando del inicio del arreglo
meses.shift();

//eliminar varios elementos en un rango
//en el ejemplo se elimina de la posición 2, 2 elementos más
meses.splice(2, 2);

//revertir el orden de los elementos
meses.reverse();

console.log(meses);

//unir un arreglo con otro
let arreglo1 = [1, 2, 3],
  arreglo2 = [9, 8, 7];

console.log(arreglo1.concat(arreglo2));

//ordenar un arreglo
const frutas = ["platano", "manzana", "fresa", "naranja"];
frutas.sort();
console.log(frutas);

//ordenar un Arreglo de números
arreglo1 = [3, 9, 91, 92, 23, 45, 21, 56, 1, 100, 10];
arreglo1.sort();
console.log(arreglo1);

//js ordena números de otra forma por lo tanto es más conveniente crear una funcion
arreglo1.sort(function (x, y) {
  return x - y; //de menor a mayor
});
console.log(arreglo1);

arreglo1.sort(function (x, y) {
  return y - x; //de mayor a menor
});
console.log(arreglo1);

//Arreglo Mezclado

//const mezclado = ['Hola', 20, true, null, false, undefined];
//console.log(mezclado);

//Creando arreglos con el spread operator (función declarativa, buscar archivo funciones.js)
let resultado = [...arreglo1, 14]; //en este caso también se le agregó nuevos elementos a este nuevo array

//Destructuring de arrays-> extraer propiedades de un array en un mismo paso
const [primero, segundo, tercero, enesimo] = meses; //toma el primer valor del array meses, y lo asigna a la variable primero, luego toma el segundo valor del array y lo asigna a la variable segundo, y etc
const [, , tercer] = meses; //solo mostrar el tercer valor
const [primer, , tres] = meses; //extraer el primer y el tercer valor

const [uno, dos, ...tre] = meses; //...tre contendrá un array desde la posicion 3 a la final. Esta sintaxis es muy usada en React

//Otros metodos de arreglos

const arr11 = ["enero", "febrero", "marzo"];

const arr12 = [
  { nombre: "01", precio: 600 },
  { nombre: "02", precio: 800 },
  { nombre: "03", precio: 1000 }
];

//buscar si un valor existe en el arreglo que no tiene clave-valor (includes - some). este metodo no sirve para arreglos de objetos
const resu = arr11.includes("Enero"); //devuelve v o f

//buscar si un valor existe dentro de un arreglo de objetos, aunque sirve em cualquier tipo de arreglo
const resu2 = arr12.some((producto) => {
  return producto.nombre === "03";
}); //devuelve v o f

//lo anterior pero mas simplificado
const resu3 = arr12.some((producto) => producto.nombre === "03"); //devuelve v o f

//findIndex -> para buscar el indice donde se encuentra cierto valor especificado dentro de un arreglo
//este metodo sirve tambienpara arreglos de objetos
const indice_buscar = arr11.findIndex((mes) => mes === "abril");
//para un arreglo de objetos
const indice_buscar2 = arr12.findIndex((producto) => producto.nombre === "5");
