//template literals o string template

const producto1 = 'pizza',
    precio1 = 30,
    producto2 = 'hamburguesa',
    precio2 = 40;

let html;

//la forma antigua de hacer html y mostrarlo en una componente de html 

/*
html = '<ul>' +
    '<li> Orden: ' + producto1 + '</li>' +
    '<li> Precio: ' + precio1 + '</li>' +
    '<li> Orden: ' + producto2 + '</li>' +
    '<li> Precio: ' + precio2 + '</li>'+
    '<li> Total: ' + (precio1 + precio2) + '</li>';

*/

//nueva forma
//La versión Ecmascript6 puede tener funciones dentro de sus template literals
html = `
        <ul>
        	<li> Orden 1: ${producto1}</li>
        	<li> Precio: ${precio1}</li>
        	<li> Orden 2: ${producto2}</li>
        	<li> Precio: ${precio2}</li>
        	<li> Total: ${total(precio1, precio2)}</li>
        </ul>

`;


function total(precio1, precio2){
	return precio1 + precio2;
}

document.getElementById('app').innerHTML = html;