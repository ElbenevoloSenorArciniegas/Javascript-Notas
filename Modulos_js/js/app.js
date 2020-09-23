//import
//lo que no esta dentro de llave son parte de los export default, incluso se le puede colocar un nombre diferente, tal que se pueda referenciar a la función que se esté importando, eso se le conoce como un alias
// el 'as' es para asignarle alias a los imports

import nueva_funcion_default, { nombre_cliente as nombre, ahorro, mostrar_info, Cliente } from './cliente.js';

import { Empresa } from './empresa.js';

console.log(nombre, ahorro);

console.log(mostrar_info('pepa', 10000));

//uso de las clases importadas
const cliente = new Cliente(nombre, 23);
console.log(cliente);
console.log(cliente.mostrar_info());

//usando la clase que hereda de cliente
const empresa = new Empresa(nombre, 24, 'enseñanza front');
console.log(empresa);

nueva_funcion_default();