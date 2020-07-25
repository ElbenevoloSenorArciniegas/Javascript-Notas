//Los prototypes era lo que se usaba antes de las clases, antes de Ecmascript 6
//los prototypes sirven para que los objetos no queden tan cargados, y también para que el código se vea más organizado
//los prototypes tembién pueden servir para tener restricciones sobre el uso de los objetos

function Cliente(nombre, saldo) {

    this.nombre = nombre;
    this.saldo = saldo;

    /*this.tipo_cliente = function() {
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'gold';
        } else tipo = 'normal';
        return tipo;
    };*/
}

//Creando un prototype

//este prototype solo será accesible por los objetos de tipo cliente
/*Cliente.prototype.tipo_cliente = function() {
  let tipo;
  if (this.saldo > 1000) {
      tipo = 'gold';
  } else tipo = 'normal';
  return tipo;
};*/

/*
Cliente.prototype.retirar_saldo = function(cnt_retiro) {
  this.saldo -= cnt_retiro;
  return `Tu nuevo saldo es de ${this.saldo}. Eres un tipo de cliente ${this.tipo_cliente()}.`;
};
*/

//const cliente_1 = new Cliente('Pedro', 100);
//console.log(cliente_1);

//se puede acceder de la misma forma a los prototypes de un objeto
//console.log(cliente_1.tipo_cliente());

//console.log(cliente_1.nombre_cliente_saldo());
//console.log(cliente_1.retirar_saldo(45));

//prototipo que imprime saldo y nombre
Cliente.prototype.nombre_cliente_saldo = function() {
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo} pesos.`;
    //\nTipo de cliente: ${this.tipo_cliente()}`;
};


//Ejemplo herencia de prototypes

function Empresa(nombre, saldo, telefono, tipo) {
    //heredando de cliente
    Cliente.call(this, nombre, saldo);

    this.telefono = telefono;
    this.tipo = tipo;
}

//Heredando funciones del Cliente
Empresa.prototype = Object.create(Cliente.prototype);

const empresa_1 = new Empresa('UDEMY', 10000000, 123456789, 'Educacion');

console.log(empresa_1);
console.log(empresa_1.nombre_cliente_saldo()); //usando funciones de cliente, en empresa