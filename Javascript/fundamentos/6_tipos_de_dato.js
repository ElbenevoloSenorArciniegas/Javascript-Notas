let valor;

//javascript es un lenguaje de tipo dinámico, no hay necesidad de especificar el tipo de dato

//typescript si tiene tipos de datos para especificar la variable

//datos primitivos
valor = 'hola'; //string
valor = 20; //number
valor = 2.2; //number
valor = true; //booleano
valor = undefined;

//symbol -> nueva version de js
valor = Symbol('Simbolo');

//datos de tipo objeto
valor = { //object
    nombre: 'crisel',
    profesion: 'desarrollador web'
}

valor = null; //object;
//null es un dato de tipo objeto, solo que vacío

valor = [1, 2, 3, 4]; //array

valor = new Date(); //fecha




console.log(valor);
console.log(typeof valor); //typo de dato de la variable "valor"