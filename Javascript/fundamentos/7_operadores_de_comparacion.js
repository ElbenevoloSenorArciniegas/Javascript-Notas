//operadores de comparacion

const numero1 = 20;
const numero2 = 50;
const numero3 = '20';

//operaciones que retorna true o false

console.log(numero1 > numero2);
console.log(numero1 < numero2);

//comparador de igual
console.log(20 == '20'); //true
console.log(20 === '20'); //false, verifica que el tipo de dato sea el mismo, es mejor verificar con este

//2 numeros diferentes
console.log(numero1 != numero2); //true

console.log('hola' == ' hola'); //false

console.log('a' > 'b'); //false, verifica el valor ascii de las cadenas en orden
console.log('z' > 'A'); //true

console.log(null == undefined) //true
console.log(null === undefined); // false, tipo de dato diferente