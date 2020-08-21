//se usó randomuser (https://randomuser.me/documentation), que contiene un banco de datos con muchos nombres

document.querySelector('#generar-nombre').addEventListener('submit', generar_nombres);

function generar_nombres(event) {
    event.preventDefault();

    //leer las variables
    const origen = document.getElementById('origen');
    const origen_seleccionado = origen.options[origen.selectedIndex].value; //options(select)

    const genero = document.getElementById('genero');
    const genero_seleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = `https://randomuser.me/api/?results=${cantidad}`;

    if (origen_seleccionado !== '') url += `&nat=${origen_seleccionado}`;
    if (genero_seleccionado !== '') url += `&gender=${genero_seleccionado}`;

    //conectar con AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const resultados = JSON.parse(this.responseText).results;

            //generar html
            let html_nombres =
                '<h2> Nombres Generados </h2>' +
                '<ul class = "lista">';

            resultados.forEach(function(resultado) {
                html_nombres += `<li>${resultado.name.first} ${resultado.name.last}</li>`;
            });

            html_nombres += '</ul>';
            document.getElementById('resultado').innerHTML = html_nombres;
        }
    }
    xhr.send();


}