//funcion que no existe

try{

	algo();

}catch(error){

	console.log(error);

}finally{ //ejecuta si hay o no hay error

	console.log('No le importa, ejecuta de todos modos');
	
}

obtener_clientes();

function obtener_clientes(){
	console.log('Descargando....');

	setTimeout(function(){
		console.log('Completo');
	}, 3000);
}