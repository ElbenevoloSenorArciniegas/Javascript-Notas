//este es el mismo proyecto, pero usando fetchAPI

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

    //conectar usando fetchAPI

    fetch(url)
        .then(function(res) {
            //console.log(res);
            return res.json(); //mostrar como texto
        })
        .then(function(nombres) {
            //console.log(nombres);
            let html = `
                <h2> Nombres Generados </h2>
                <ul class = "lista">`;

            nombres.results.forEach(function(nombre) {
                html += `<li>${nombre.name.first} ${nombre.name.last}</li>`;

            });
            html += '</ul>';
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        });


}