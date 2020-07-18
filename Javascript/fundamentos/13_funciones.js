//Function declaration

function saludar(){
	console.log('Holaaa');
}

saludar();

//funciones con parametros

function saludar2(nombre){
	console.log(nombre);
}

saludar2('Miguel');

function sumar(a,b){
	console.log(a + b);
}

sumar(13, 26);

//funciones que retornan un valor

function sumar2(a,b){
	return a + b;
}

var suma = sumar2(12, 24);
console.log(suma);

//Colocando valores por default a los parámetros, en caso de que no los envíen al 
//llamar la función

function saludar3(nombre){
	if(typeof nombre === 'undefined'){
		nombre = 'Sin nombre';
	}
	return `Hola ${nombre}`;
}

var saludo = saludar3('Pepito');
console.log(saludo);

saludo = saludar3();
console.log(saludo);

//una mejor forma de colocar parámetros por defecto

function saludar4(nombre = 'Visitante'){

	return `Hola ${nombre}`;
}

saludo = saludar4();
console.log(saludo);

/*-----------------------------------------------------------------------------*/

//Function expression

const sumar3 = function (a, b){
	return a + b;
}

sumar3(1, 2); //suma2 sería una funcion que se almacena dentro de una variable;

console.log(sumar3(3, 4));

const saludar5 = function (nombre = 'Visitante'){
	return `Hola ${nombre}`;
}
console.log(saludar5());

/*-----------------------------------------------------------------------------*/

//IIFE - funciones que se declaran e invocan inmediatamente
//Estas estructura es vista en jquery
(function(){
	console.log('Creando un IIFE');
})();

(function(tecnologia){
	console.log(`Aprendiendo ${tecnologia}`);
})('javascript');

/*-----------------------------------------------------------------------------*/

//Métodos de propiedad - cuando una función se pone dentro de un objeto

const musica = {
	reproducir: function(id){
		console.log(`Reproduciendo Cancion id ${id}`);
	},
	pausar: function(){
		console.log('Pausa a la Música');
	}
}

musica.reproducir(30);
musica.pausar();

// Los métodos también pueden guardarse / crearse fuera del objeto

musica.borrar = function(id){
		console.log(`Borrando Cancion con el id ${id}`);
};

musica.borrar(2);