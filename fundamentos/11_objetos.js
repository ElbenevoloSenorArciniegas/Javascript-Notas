("use strict"); //hace que el usuario tenga buenas practicas al escribir codigo js. y al habilitar esto me otorga algunos nuevos métodos, como en el caso de querer que no se modifiquen las propiedades de un objeto (object.freeze)

// creando objetos
const persona = {
  nombre: "Crisel",
  apellido: "Ayala",
  profesion: "aprendeiz de desarrollo web",
  email: "correo@correo.com",
  edad: 40,
  musica: ["rock", "jazz"],
  hogar: {
    //objeto dentro de objeto
    ciudad: "Cúcuta",
    pais: "Mexico"
  },
  anio: function () {
    return new Date().getFullYear() - 20;
  },
  anio_nacimiento: function () {
    //this sirve para utilizar elementos del mismo objeto
    return new Date().getFullYear() - this.edad;
  },

  //puedo agregarle getters y setters
  set nuevo_nombre(nombre) {
    this.nombre = nombre;
  },

  get obtener_nombre() {
    return this.nombre;
  }
};

console.log(persona);

//para acceder a un objeto se toman las llaves
console.log(persona.nombre);

//si se agregaron arreglos al objeto, se pueden utilizar sus métodos de arreglos
console.log(persona.musica[1]);
persona.musica.push("Alternativo");
console.log(persona.musica);

//Accediendo a objetos dentro de objetos
console.log(persona.hogar.pais);

//otra forma de acceder a elementos dentro de un objeto
console.log(persona["nombre"]);
console.log(persona["hogar"]["ciudad"]);

//accediendo a funciones que están dentro de los objetos
console.log(persona.anio());

console.log(persona.anio_nacimiento());

//Agregando nuevas propiedades al objeto
persona.estado_civil = "soltero";

//Eliminando propiedades de un objeto
delete persona.estado_civil;

//llamando a un setter, bajo la modalidad Arrow function
persona.nuevo_nombre = "maria";
const persona_nuevo = persona.obtener_nombre; //como es un getter, no es necesario los paréntesis

/* Destructuring de objetos -> algo de las nuevas versiones de JS. Consiste en extraer propiedades de un objeto y asignarlas a una variable, en 1 solo paso*/

//const { nombre } = persona; //extrayendo la propiedad nombre
const { nombre, apellido } = persona;
console.log(nombre + " " + apellido);
const { hogar } = persona; //acceder a la propiedad "hogar", que también es un objeto

//Destructuring de objetos anidados
const {
  hogar: { ciudad }
} = persona;
console.log(ciudad);

/* el problema con los objetos, es que a pesar que se pueden declarar con const, se pueden modificar sus propiedades. por eso es muy bueno poner el modo estricto */

//para que una propiedad de un objeto no se pueda modificar, y tampoco que se puedan agregar y eliminar propiedades, hay que usar el modo estricto
Object.freeze(persona);
//saber si un objeto ha sido congelado
console.log(Object.isFrozen(persona));

//sellando objetos -> hace que a un objeto no se le puedan agregar ni eliminar propiedades, pero que si se puedan modificar las propiedades existentes
Object.seal(persona);
//saber si un ibjeto ha sido sellado
console.log(Object.isSealed(persona));

const otras_propiedades = {
  estado_civil: soltero
};

//unir objetos
const res = Object.assign(persona, otras_propiedades);

//otra forma de unir objetos (spread operator o Rest operator)
const res2 = { ...persona, ...otras_propiedades };

//esto es un object literal
const automovil = {
  marca: "mazda"
};

//esto es un object constructor -> así se hacía la programacion orientada a objetos, anteriormente
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}
const producto_1 = new Producto("galletas", 1000);

//keys, values, entries

console.log(Object.keys(Producto));
console.log(Object.values(Producto));
console.log(Object.entries(Producto)); //keys y values, cada índice como un array conteniendo su key y valor
