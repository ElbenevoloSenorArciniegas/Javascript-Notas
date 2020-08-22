//Scope es la visibilidad que tiene un valor en jsvascript

var a = 'a';
let b = 'b';
const c = 'c';

console.log('Globales ' + a,b,c); // a,b,c

//scope de la funcion
function function_scope(){
	var a = 'A';
	let b = 'B';
	const c = 'C';

	console.log('Funcion ' + a,b,c); //A,B,C
}
function_scope();

//Scope de bloque {}


if(true){
	var a = 'AA';
	let b = 'BB';
	const c = 'CC';

	console.log('Bloque ' + a,b,c); //AA, BB, CC
}

for(var a = 0; a < 10; a++){
	console.log(a); //reescribe la variable global a
}

for(let b = 0; b < 10; b++){
	console.log(b); //No reescribe la variable global b
}

// los var son modificados dentro del bloque y se verán en el global
console.log('Globales ' + a,b,c); // AA,b,c