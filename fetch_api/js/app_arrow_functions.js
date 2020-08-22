//el mismo proyecto usando arrow functions

document.getElementById('txtBtn').addEventListener('click', cargar_txt);
document.getElementById('jsonBtn').addEventListener('click', cargar_json);
document.getElementById('apiBTN').addEventListener('click', cargar_rest);


//consumiendo datos desde un txt
function cargar_txt() {

    fetch('datos.txt') // el parámetro en este caso sería la url donde se realizará la petición
        .then(res => res.text()) //mostrar como texto
        .then(data => document.getElementById('resultado').innerHTML = data) //data sería el res.text()
        .catch(error => console.log(error));

}

//consumiendo datos desde un json
function cargar_json() {
    fetch('empleados.json')

    .then(res => res.json())

    .then(data => {
            let html = '';

            data.forEach(function(empleado) {
                html += `<li>${empleado.nombre} ${empleado.puesto}</li>`;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error));
}

//consumiendo datos desde una API -> https://picsum.photos/list
function cargar_rest() {
    fetch('https://picsum.photos/list')

    .then(res => res.json())

    .then(imagenes => {
            let html = '';

            imagenes.forEach(function(imagen) {
                html +=
                    `<li>
                <a target="_blank" href = ${imagen.post_url}> Ver Imagen</a>
                ${imagen.author}
                </li>`;
                //target="_blank -> para que cargue enotra página
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error));
}