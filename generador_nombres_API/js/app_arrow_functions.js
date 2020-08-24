//este es el mismo proyecto, pero usando fetchAPI y arrow functions

//se usó randomuser (https://randomuser.me/documentation), que contiene un banco de datos con muchos nombres

generar_nombres = (event) => {
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
        .then(res => res.json())
        .then(nombres => {
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
        .catch(error => console.log(error));

}

//si coloco esta parte al inicio, botará un error de que la función generar_nombres no existe
document.querySelector('#generar-nombre').addEventListener('submit', generar_nombres);