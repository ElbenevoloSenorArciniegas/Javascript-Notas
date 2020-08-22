//mostrar json empleado
const boton_1 = document.getElementById('boton_1');

boton_1.addEventListener('click', function(event) {
    event.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function() {

        if (this.status === 200) {
            const persona = JSON.parse(this.responseText);

            const html_template = `
                <ul>
                <li>Id: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Ocupacion: ${persona.trabajo}</li>
                </ul>
            `;

            document.getElementById('empleado').innerHTML = html_template;
        }
    };

    xhr.send();
});

//Mostrar json empleados

const boton_2 = document.getElementById('boton_2');

boton_2.addEventListener('click', function(event) {
    event.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function() {

        if (this.status === 200) {
            const personal = JSON.parse(this.responseText);

            let html_template = "";

            personal.forEach(function(persona) {

                html_template += `
                <ul>
                <li>Id: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Ocupacion: ${persona.trabajo}</li>
                </ul>
            `;
            });

            document.getElementById('empleados').innerHTML = html_template;
        }
    };

    xhr.send();
});