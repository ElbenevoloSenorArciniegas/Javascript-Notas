//numeros con js

const numero1 = 30,
    numero2 = 20,
    numero3 = 20.20,
    numero4 = .1020,
    numero5 = -5;

console.log(numero1);

let resultado;

//suma 
resultado = numero1 + numero2;
//resta
resultado = numero1 - numero2;
//multiplicar
resultado = numero1 * numero2;
//divisiones
resultado = numero1 / numero2;
//modulo
resultado = numero1 % numero2;
//pi
resultado = Math.PI;
//redondeo
resultado = Math.round(numero3);
resultado = Math.ceil(4.5); //hacia arriba
resultado = Math.floor(4.5); //hacia abajo
//raiz cuadrada
resultado = Math.sqrt(2);
//absoluto
resultado = Math.abs(numero5);
//potencia
resultado = Math.pow(8, 3);
//minimo entre varios numeros
resultado = Math.min(3, 6, 5, 9, 7, 8);
//maximo entre varios numeros
resultado = Math.max(3, 6, 5, 9, 7, 8);
//numero aleatorio
resultado = Math.random() //numero entre 0 y 1, decimal
resultado = 10 + 20 - 5; //se opera en orden de los signos
resultado = (10 + 20) - 5; //primero se hace lo que esté entre parentesis
console.log(resultado);

/********/
let puntaje = 10;

puntaje++; //incrementador
puntaje--; //decrementador

pupuntaje -= 20
puntaje += 9;

console.log(puntaje);