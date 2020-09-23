//crear mi propio iterador

function crear_iterador(carrito) {

    let i = 0;

    return {
        siguiente: () => {
            //hay que saber el valor actual y el size de ese listado

            const fin = (i >= carrito.length); // definir el final de las iteraciones
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }
        }
    }

}

const carrito = ['producto1', 'producto2', 'producto3'];

//utilizar el iterador
const recorrer_carrito = crear_iterador(carrito);

//iterando...
console.log(recorrer_carrito.siguiente());
console.log(recorrer_carrito.siguiente());
console.log(recorrer_carrito.siguiente());
console.log(recorrer_carrito.siguiente());