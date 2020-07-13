const ciudades = ['Londres', 'New york', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

//insertar en el map
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador web');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

//Entries iterador

//for(let entrada of ciudades.entries()){
//	console.log(entrada); //cada una de las iteraciones retorna un array con el indice 
						  //y el elemento
//}

//Entries para los sets

//for(let entradas of ordenes.entries()){
//	console.log(entradas); //en los sets la clave y el valor valen lo mismo
//}

//Entries para el map

//for(let entrada_datos of datos.entries()){
//	console.log(entrada_datos);
//}

//Values iterador -> imprime solo los valores

//for(let entrada of ciudades.values()){
//	console.log(entrada); //cada una de las iteraciones retorna un array con el indice 
						  //y el elemento
//}

//esto es lo mismo a lo que hice anteriormente

//for(let entrada of ciudades){
//	console.log(entrada); //cada una de las iteraciones retorna un elemento con el valor
//}
//values para los sets

//for(let entradas of ordenes.values()){
//	console.log(entradas); //en los sets la clave y el valor valen lo mismo
//}

//values para los maps

//for(let entrada_datos of datos.values()){
//	console.log(entrada_datos);
//}

//Keys iterador -> imprime solo las claves

//for(let entrada of ciudades.keys()){
//	console.log(entrada); 
//}

//keys para los sets

//for(let entradas of ordenes.keys()){
//	console.log(entradas); //en los sets la clave y el valor valen lo mismo
//}

//keys para los maps

//for(let entrada_datos of datos.keys()){
//	console.log(entrada_datos);
//}

//Default iterador

for(let entrada of ciudades){
	console.log(entrada); 
}

const mensaje = 'Aprendiendo Javascript';

for(let i = 0; i< mensaje.length; i++) console.log(mensaje[i]);

//hacer lo mismo con for por default

for(let letra of mensaje){
	console.log(letra);
}

//usar iteradores para recorrer elements en el html
// en este caso recorreré los enlaces

const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces){
	console.log(enlace);
	console.log(enlace.href);
}