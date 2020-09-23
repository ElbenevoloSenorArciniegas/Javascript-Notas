//maps son listas ordenadas con llave y valor, las claves no se pueden repetir
//los maps tienen mejor performance que un objeto

const cliente = new Map();

//agregar elemento
cliente.set('nombre', 'pedro');
cliente.set('tipo', 'empleado');

//en los objetos solo puedo colocar una clave string, en los map, pueden ser de cualquier tipo
cliente.set(true, true);

console.log(cliente);

//tamaño
console.log(cliente.size);

//verificar existencia de las claves
console.log(cliente.has('nombre'));

//verificar existencia de las claves e imprimir el valor
console.log(cliente.get('nombre'));

//limpiando
cliente.clear();
console.log(cliente);

//otra forma de definir maps, pasando constructor
const paciente = new Map([
    ['nombre', 'paciente'],
    ['cuarto', 'no definido']
]);
console.log(paciente);

//los mapas son iterables

paciente.forEach((valor, index) => {
    console.log(index, valor);
});