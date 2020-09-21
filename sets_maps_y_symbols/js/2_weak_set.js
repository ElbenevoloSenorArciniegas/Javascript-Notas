//Weak set
//a diferencia del set, en el weakset solo puedo agregar objetos

const weak_set = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
};

weak_set.add(cliente);
console.log(weak_set.has(cliente));
weak_set.delete(cliente);

// el weakset no tiene metodo size
// los weakset no son iterables, no puedo iterar con forEach

console.log(weak_set);