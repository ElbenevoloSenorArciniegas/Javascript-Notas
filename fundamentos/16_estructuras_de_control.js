const edad = 18;

//Condicionales -> se usan los operadores de comparación para crear condicionales
if (edad >= 18) {
  console.log("Si puedes entrar al sitio");
} else {
  console.log("No puedes entrar al sitio");
}

// === y !== -> comparador estricto

// Comprobar que una variable tiene un valor

let puntaje = 1000;

if (puntaje) {
  console.log(`El puntaje fué de ${puntaje}`);
} else {
  console.log("No hay puntaje");
}

//otra forma de hacer lo anterior
if (typeof puntaje != "undefined") {
  console.log(`El puntaje fué de ${puntaje}`);
} else {
  console.log("No hay puntaje");
}

let efectivo = 500;
let total_carrito = 300;

if (efectivo > total_carrito) console.log("Pago correcto");
else console.log("Fondos Insuficientes");

//Else if

let hora = 20;

if (hora > 0 && hora <= 12) {
  console.log("Buenos días");
} else if (hora > 12 && hora <= 18) {
  console.log("Buenas tardes");
} else if (hora > 18 && hora <= 24) {
  console.log("Buenas noches");
} else {
  console.log("Hora no válida");
}

puntaje = 100;

if (puntaje < 150) {
  //ambas condiciones se cumplen pero esta se ejecuta primero y no se ejecutan los demás if
  console.log("puntaje < 150");
} else if (puntaje < 200) {
  console.log("puntaje < 200");
}

//Ejemplo con or ||

efectivo = 300;

let credito = 600,
  disponible = efectivo + credito;

total_carrito = 500;

if (total_carrito < efectivo || total_carrito < credito) {
  console.log("Puedo pagar");
} else if (total_carrito < disponible) {
  console.log("Pagué con ambos");
} else {
  console.log("No puedo pagar");
}

//Ternario

const logueado = true;

console.log(logueado === true ? "Si se logueó" : "No se logueó");

//Un if anidado dentro de un ternario
const autenticado = true;
const puede_pagar = true;

console.log(
  autenticado
    ? puede_pagar
      ? "si está autenticad y si puede pagar"
      : "si está autenticado y no puede pagar"
    : "no esta autenticado"
);

console.log(
  autenticado
    ? puede_pagar
      ? "si está autenticad y si puede pagar"
      : "si está autenticado y no puede pagar"
      ? puede_pagar
      : "no esta autenticado y puedo pagar"
    : "no esta autenticado y no puedo pagar"
);
