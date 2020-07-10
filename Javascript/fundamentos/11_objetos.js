// creando objetos
const persona = {
	nombre: 'Crisel',
	apellido: 'Ayala',
	profesion: 'aprendeiz de desarrollo web',
	email: 'correo@correo.com',
	edad:40,
	musica: ['rock', 'jazz'],
	hogar: {
		ciudad: 'Cúcuta',
		pais: 'Mexico'
	},
	anio: function() {
		return new Date().getFullYear() - 20;
	},
	anio_nacimiento: function() {
		//this sirve para utilizar elementos del mismo objeto
		return new Date().getFullYear() - this.edad;
	}
};

console.log(persona);

//para acceder a un objeto se toman las llaves
console.log(persona.nombre);

//si se agregaron arreglos al objeto, se pueden utilizar sus métodos de arreglos
console.log(persona.musica[1]);
persona.musica.push('Alternativo');
console.log(persona.musica);

//Accediendo a objetos dentro de objetos
console.log(persona.hogar.pais);

//otra forma de acceder a elementos dentro de un objeto
console.log(persona['nombre']);
console.log(persona['hogar']['ciudad']);

//accediendo a funciones que están dentro de los objetos
console.log(persona.anio());

console.log(persona.anio_nacimiento());