//Arreglo de objetos

const autos= [
	{modelo: 'Mustang', motor: 6.0},
	{modelo: 'Camaro', motor: 6.1},
	{modelo: 'Challenger', motor: 6.3}
];

console.log(autos);
console.log(autos[0].modelo);

//recorrido

for(let i = 0; i < autos.length; i++){
	console.log(autos[i]);
	console.log(`${autos[i].modelo} ${autos[i].motor}`);

}

//aunque el objeto sea const, se pueden modificar sus índices individualmente
autos[0].modelo = 'Audi';
console.log(autos)