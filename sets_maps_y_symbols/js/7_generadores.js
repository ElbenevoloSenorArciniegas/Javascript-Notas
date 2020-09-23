//un generador es una función que retorna un iterador
//se identifican con *
function* crear_generador() {

    //los yield son los valores estáticos, para poder iterar sobre ellos
    yield 1;
    yield 'cris';
    yield true;
}

const iterador = crear_generador();


console.log(iterador); //esto imprime un suspended, que indica que ese generador está dormido y no se usa en el momento

//el next lo despierta e imprime el valor actual (recorre los yields), luego se vuelve a suspender
//cuando se termina de iterar, el suspended cambia a closed
console.log(iterador.next());
console.log(iterador);

//acceder al valor del iterador
console.log(iterador.next().value);
console.log(iterador.next().done); // el done indica si ya finalicé de iterar
console.log(iterador);

//generador para carrito de compras


function* generador_carrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        //poner en cola los elementos del generador
        yield carrito[i];
    }
}

const carrito = ['p1', 'p2', 'p3'];
const iterador_2 = generador_carrito(carrito);

//iterando..
console.log(iterador_2.next());