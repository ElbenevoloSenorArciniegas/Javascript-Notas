//Prototype -> lo que se usaba antes de la programación orientada a objetos en javascript, ahí se definían cosas como los constructores..

//creando objetos

//Object literal
const cliente = {
        nombre: 'juan',
        saldo: 50,
        tipo_cliente: function() {
            let tipo;
            if (this.saldo > 1000 && this.saldo <= 5000) {
                tipo = 'gold';
            } else if (this.saldo > 5000) {
                tipo = 'Platinum';
            } else {
                tipo = 'normal';
            }

            return tipo;
        }
    }
    //console.log(cliente.saldo);
    //console.log(cliente.tipo_cliente(50000));

//Método alternativo
//método usado antes de Ecmascript 6

function Cliente(nombre, saldo) {

    //pasando datos como constructor
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipo_cliente = function() {
        let tipo;
        if (this.saldo > 1000 && this.saldo <= 5000) {
            tipo = 'gold';
        } else if (this.saldo > 5000) {
            tipo = 'Platinum';
        } else {
            tipo = 'normal';
        }

        return tipo;
    };
}

const persona = new Cliente('Pedro', 20000);

const persona_2 = new Cliente('maría', 4000);
//console.log(persona_2);
//console.log(persona_2.tipo_cliente());


//creando string con constructores
const nombre_1 = 'Sara';
const nombre_2 = new String('Pablo');

console.log(typeof nombre_1); //type -> string
console.log(typeof nombre_2); //type -> object
console.log(nombre_2); //String("Pablo"). también se mostrará sus protos, con las funciones de string

if (nombre_1 == nombre_2) { //true
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}

if (nombre_1 === nombre_2) { //false
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}

//creando objetos numeros
const numero = new Number(20);

//creando objetos booleanos
const boolean = new Boolean(true);

//functions

const function_1 = new Function('a', 'b', 'return a + b');

const function_2 = function(a, b) {
    return a + b;
}

console.log(function_1(1, 2));
console.log(function_2(1, 2));

//objetos
const persona_1 = {
    nombre: 'Juan'
}

const persona_3 = new Object({
    nombre: 'María'
});

console.log(persona_1);
console.log(persona_3);

//Arreglos
const arreglo_1 = [1, 2, 3, 4];
const arreglo_2 = new Array(1, 2, 3, 4);

console.log(arreglo_1);
console.log(arreglo_2);