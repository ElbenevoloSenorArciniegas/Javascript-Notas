let tecnologia = "javascript";
let mensaje = "es genial";

//size del string
console.log(tecnologia.length);

//concat
console.log(mensaje.concat(' ', tecnologia));

// convertir a mayusculas
console.log(tecnologia.toUpperCase());

/* ------- */

let mensaje2 = "aprendiendo un nuego lenguaje de programacion";

/* en que posicion se encuentra un substring */
console.log(mensaje2.indexOf('lenguaje'));

/* reemplaza las oraciones por ciertas palabras */
console.log(mensaje2.replace('lenguaje', 'language'));

/* parecido al index of pero retorna true o false */
console.log(mensaje2.includes('lenguaje'));

/* repetir un valor */
console.log(tecnologia.repeat(10));

//Eliminar espacios al inicio y al final
const producto = " monitor 20 pulgadas";
console.log(producto.trimStart()); //eliminar espacios al inicio
console.log(producto.trimEnd()); //eliminar espacios al final

// usando