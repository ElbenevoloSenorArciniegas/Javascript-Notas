//una nueva estructura para funciones de las nuevas versiones de ECS

let aprendiendo = function() {
    console.log('Aprendiendo Javascript');
}
aprendiendo();


//usando arrow functions
aprendiendo_2 = () => {
    console.log('Aprendiendo Javascript');
}
aprendiendo_2();


//para funciones de una sola linea
aprendiendo_3 = () => console.log('Aprendiendo Javascript');
aprendiendo_3();

//retorna valor
aprendiendo_4 = () => 'Aprendiendo Javascript'; // return
console.log(aprendiendo_4());

//retorna objeto
aprendiendo_5 = () => ({ 'aprendiendo': 'aprendiendo javascript' });
console.log(aprendiendo_5());

//pasar parámetros
aprendiendo_6 = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo_6('javascript');

//al pasar un parámetro, el primer paréntesis es opcional
aprendiendo_7 = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo_7('ES6');

aprendiendo_8 = (tecnologia_1, tecnologia_2) => console.log(`Aprendiendo ${tecnologia_1} y ${tecnologia_2}`);

aprendiendo_8('javascript', 'ES6');

const productos = ['disco', 'camisa', 'guitarra'];

//usando arrow functions con callbacks

//la forma normal
const letras_productos = productos.map(function(producto) {
    return producto.length;
});
console.log(letras_productos);

//usando arrow function
const letras_productos_2 = productos.map((producto) => {
    return producto.length;
});
console.log(letras_productos_2);


const letras_productos_3 = productos.map((producto) => producto.length);
console.log(letras_productos_3);

//arrow function con for each
productos.forEach(producto => {
    console.log(producto);
});

productos.forEach(producto => console.log(producto)); // producto es el parámetro de la función