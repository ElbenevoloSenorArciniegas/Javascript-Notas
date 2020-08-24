//cargando datos de jsonplaceholder

const cargar_posts = document.querySelector('#cargar');

cargar_posts.addEventListener('click', function(event) {
    event.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(this.responseText);

            let contenido = '';
            response.forEach(function(r) {

                contenido += `
                    <h3>${r.title}</h3>
                    <p>${r.body}</p>
                `;
            });
            document.getElementById('listado').innerHTML = contenido;
        }
    };

    xhr.send();
});