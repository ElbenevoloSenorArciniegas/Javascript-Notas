let tecnologia = "javascript";
let mensaje = "es genial";

//size del string
console.log(tecnologia.length);

//concat
console.log(mensaje.concat(" ", tecnologia));

// convertir a mayusculas
console.log(tecnologia.toUpperCase());

// convertir a minusculas
console.log(tecnologia.toLowerCase());

/* ------- */

let mensaje2 = "aprendiendo un nuego lenguaje de programacion";

/* en que posicion se encuentra un substring */
console.log(mensaje2.indexOf("lenguaje"));

/* reemplaza las oraciones por ciertas palabras */
console.log(mensaje2.replace("lenguaje", "language"));

/* parecido al index of pero retorna true o false */
console.log(mensaje2.includes("lenguaje"));

/* repetir un valor */
console.log(tecnologia.repeat(10));

//Eliminar espacios al inicio y al final
const producto = " monitor 20 pulgadas";
console.log(producto.trimStart()); //eliminar espacios al inicio
console.log(producto.trimEnd()); //eliminar espacios al final

//usando metodos de forma encadenada (chaning)
//los metodos encadenados es algo muy nuevo en js (> 1 año)
console.log(producto.trimStart().trimEnd());

console.log(producto.trim); //eliminar espacios en ambas direcciones

//slice -> mostrar parte de una cadena de texto
console.log(producto.slice(1, 4)); //elimine desde la posicion 1 a la 4
console.log(producto.slice(1)); //elimine desde la posicion 1 en adelante
console.log(producto.slice(1, 4)); //si el primer numero es mayor al segundo, no hará absolutamente nada, muestra cadena vacia

//substring
console.log(producto.substring(1, 4)); //mostrar desde la pos 1 a la 4
console.log(producto.substring(2, 1)); //reordena: mostrar desde la pos 1 a la 2. esta es la prncipal diferencia entre substring y slice

//split -> para separar o dividir cadenas por caracteres delimitados
const word = "I'm learning Javascript";
console.log(word.split("a"));
console.log(word.split(" "));
