//Ciclo for

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} es un Número Par`);
  } else console.log(`${i} es un Número Impar`);

  if (i == 5) {
    console.log(`Voy en el ${i}`);
    continue; //break; // break -> para detener la ejecición del for
  }
  console.log(`Número ${i}`);
}

const arreglo_productos = ["Camisa", "Boleto", "Guitarra", "Disco"];

for (let i = 0; i < arreglo_productos.length; i++) {
  console.log(`Producto ${arreglo_productos[i]} fué agregado`);
}

//for each

arreglo_productos.forEach(function (producto, index) {
  console.log(`Producto ${producto} en el índice ${index} fué agregado`);
});

//Map para recorrer un arreglo de objetos

const carrito = [
  { id: 1, producto: "libro" },
  { id: 2, producto: "camisa" },
  { id: 3, producto: "guitarra" },
  { id: 4, producto: "disco" }
];

const nombre_producto = carrito.map(function (carrito) {
  return carrito.producto;
});

//la diferencia entre .map y .forEach, es que el .map genera un nuevo array, por eso es que se pone el return y no console.log()

//nombre_producto retorna un array de los nombres de los productos
console.log(nombre_producto);

//imprimir un objeto con for

const automovil = {
  modelo: "Camaro",
  motor: 6.1,
  anio: 1969,
  marca: "Chevrolet"
};

for (let auto in automovil) {
  //imprimir clave: valor
  console.log(`${auto} : ${automovil[auto]}`);
}

//for...of -> una forma mas simplificada de usar los for, se puede usar para iterar sobre arreglos

/*
ej. lista original es un array
for(alias of lista_original){
  console.log(alias);
}

//convertir un objeto a array para recorrerlo con for ..of, puede ser util

for(let[llave, valor] of Object.entries(lista_objeto)){
  console.log(valor);
}
*/

//for... in -> itera sobre objetos

/* ej. tengo lista_o que es un objeto 

const obj = {
  prop_1 : 1,
  prop_2 :2,
  ..
}

for(prop of obj){  //prop sería la llave del objeto
  console.log(`${obj[prop]}`); //imprime valor
}

*/
