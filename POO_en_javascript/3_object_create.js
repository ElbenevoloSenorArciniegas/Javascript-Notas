//EL object create es una nueva forma de crear un objeto (Ecmascript 5)

const Cliente = {

    imprimir_saldo: function() {
        return `Hola. tu nombre es ${this.nombre} y tu saldo es ${this.saldo}.`;
    },
    retirar_saldo: function(valor_retiro) {
        return this.saldo -= valor_retiro;
    }
}

const cliente_1 = Object.create(Cliente);
cliente_1.nombre = 'Mary';
cliente_1.saldo = 1000;

console.log(cliente_1.imprimir_saldo());