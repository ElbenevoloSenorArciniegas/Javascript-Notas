const numero1 = "50",
    numero2 = 10,
    numero3 = 'tres',
    numero4 = '50';

//console.log(numero1 + numero2); //"5010", concatenar

//convertir de string a numero
console.log(Number(numero1));

//otra forma de convertir de string a numero
console.log(parseInt(numero4));

console.log(typeof parseInt(numero1));

console.log(Number('tres')); //Nan -> non a number, error


/***************************/


let dato;
dato = Number('20');
dato = Number('20.65433') //solo toma la parte entera
dato = Number(true); //1
dato = Number(false); //0
dato = Number(null); //0

dato = Number(undefined); //nan

dato = parseInt('100');
dato = parseFloat('100');

let valor2 = 3455.696995944993;
console.log(valor2.toFixed(3)); //toma la parte entera, con los 3 primeros decimales


/*-------------------- */

//convertir de número a string

//por ejemplo, dan un numero entero y quiero saber cuantos dígitos tiene, puede servir la conversion a string

let id = 12345555;
id = String(id);
console.log(id.length);

/****************/

//convertir booleanos a string

let r = false;
r = String(r);
console.log(typeof r);

/*******************/

//convertir de arreglo a string

let arr = [1, 2, 3];
arr = String(arr);
console.log(arr);

//toString -> otra forma de convertir a string

dato = 20;
dato = dato.toString();