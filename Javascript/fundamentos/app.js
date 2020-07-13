for(let i = 0; i < 10; i++){

	if(i % 2 == 0){
		console.log(`${i} es un Número Par`);
	} else console.log(`${i} es un Número Impar`);

	if(i == 5){
		console.log(`Voy en el ${i}`);
		continue; //break; // break -> para detener la ejecición del for
	}
	console.log(`Número ${i}`);
}

const arreglo_productos = ['Camisa', 'Boleto', 'Guitarra', 'Disco'];

for(let i = 0; i < arreglo_productos.length; i++){
	console.log(`Producto ${arreglo_productos[i]} fué agregado`);
}