//symbols -> son nuevos de EC6, permiten crear propiedades únicas, mas usado para librerías que como uso común

const sym1 = Symbol('1');
const sym2 = Symbol('1');

//cada symbol será unico, por lo tanto, este if dará false
sym1 === sym2 ? console.log('son iguales') : console.log('son diferentes');

console.log(Symbol() === Symbol);

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//agregar nombre y apellido como claves del objeto

persona[nombre] = 'juan';
persona[apellido] = 'perez';
persona.tipo_cliente = 'premium';

//las claves symbol se pueden comportar como claves normales de un objeto, pero ocultará el identificador de cada clave
console.log(persona);

//para acceder a una valor, que tiene una clave symbol
console.log(persona[nombre]);

//las propiedades que utilizan un symbol, no son iterables
for (let i in persona) console.log(i); // no imprime los elementos que contengan symbols

//definir una descripcion de un symbol
const nombre_cliente = Symbol('nombre del Cliente');
persona[nombre_cliente] = 'cris';

//si se le ponen descripciones a los symbols, podrá identificarse al mostrarlo como claves de un objeto.
console.log(persona);