//set permite crear una lista de valores, sin duplicados
//cuando los sets manejan mayores volúmenes de datos, tiendo a operar más rápido que otros objetos o listas

const carrito = new Set();

//agregar al set
carrito.add('camisa');
carrito.add('pantalon');
carrito.add('media');

//mirar tamaño set
console.log(carrito.size);

//mirar la existencia de un elemento
console.log(carrito.has('camisa'));

//eliminar del set
carrito.delete('camisa'); // estas operaciones devuelven true o false, dependiendo de la existencia de ese elemento

//vaciar el set
carrito.clear();

//los sets son iterables
// el index en un set no va a tener mucha importancia, ya que los sets no cuentan con parejas clave-valor, por lo tanto el index es igual al valor de cada elemento del set
//pertenece muestra todo el set perteneciente y sus elementos
carrito.forEach((producto, index, pertenece) => console.log(producto, index, pertenece));

console.log(carrito);

//del sig arreglo, eliminar los duplicados
const nums = [10,20,30,40,50,20,50];
const nums_no_duplicados =new Set(nums);
console.log(nums_no_duplicados);