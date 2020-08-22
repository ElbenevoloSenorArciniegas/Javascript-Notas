//callbacks -> ejecutar una funcion dentro de otra función para que se ejecute

//callback en for each
const ciudades = ['Londres', 'Bogotá', 'New York'];

//Inline callback -> la función del for each es anónima
ciudades.forEach(function(ciudad) {
    console.log(ciudad);
});

//callback con funcion definida
function callback(ciudad) {
    console.log(ciudad);
}

ciudades.forEach(callback);

//simulando el consumo de una API
const paises = ['Colombia', 'Venezuela', 'Argentina'];

//se agrega un nuevo pais despues de 2 segundos
function agregar_pais(pais, callback) {
    setTimeout(function() {
        paises.push(pais);
        callback(); //para poder respetar el orden, ejecuto una función callback
    }, 2000);
}

//los paises se muestran despues de 1 segundo
function mostrar_paises() {
    setTimeout(function() {
        let html = '';
        paises.forEach(function(pais) {
            html += `${pais}<br>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

agregar_pais('Chile', mostrar_paises);

mostrar_paises(); // esta funcion se ejecutará primero