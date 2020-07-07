//template literals o string template

const producto1 = 'pizza',
    precio1 = 30,
    producto2 = 'hamburguesa',
    precio2 = 40;

let html;

//la forma antigua de hacer html y mostrarlo en una componente de html 

html = '<ul>' +
    '<li> Orden: ' + producto1 + '</li>' +
    '<li> Precio: ' + precio1 + '</li>' +
    '<li> Orden: ' + producto2 + '</li>' +
    '<li> Precio: ' + precio2 + '</li>';

document.getElementById('app').innerHTML = html;