import {
    eliminar_cita,
    cargar_edicion_citas
} from '../funciones.js';

import {
    contenedor_citas
} from '../selectores.js';


class UI {
    imprimir_alerta(mensaje, tipo) {
        const div_mensaje = document.createElement('div');
        div_mensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        //agregar clase en base al tipo de error
        if (tipo === 'error') div_mensaje.classList.add('alert-danger');
        else div_mensaje.classList.add('alert-success');


        //mensaje de error o de exito
        div_mensaje.textContent = mensaje;

        //agregando al DOM
        document.querySelector('#contenido').insertBefore(div_mensaje, document.querySelector('.agregar-cita'));

        //quitar alerta despues de algunos segundos
        setTimeout(() => {
            div_mensaje.remove();
        }, 5000);
    }

    imprimir_citas({ listado_espera }) {

        // Se puede hacer destructuring en los parámetros de la funcion, para solo extraer las propiedades de ese objeto que estoy pasando como argumento, solo las que se vana  usar
        //const {citas} = citas;

        this.limpiar_HTML();

        listado_espera.forEach(cita => {
            //extraer la info del objeto de la cita
            const { id, mascota, propietario, telefono, fecha, hora, sintomas } = cita;

            const div_cita = document.createElement('div');
            div_cita.classList.add('cita', 'p-3');

            //agregando un atributo id
            div_cita.dataset.id = id;

            //scripting de los elementos de la cita
            const mascota_parrafo = document.createElement('h2');
            mascota_parrafo.classList.add('card-title', 'font-weight-bolder');
            mascota_parrafo.textContent = mascota;

            const info_mascota_parrafo = document.createElement('p');
            info_mascota_parrafo.innerHTML = `
              <span class= "font-weight-bolder">Propietario:</span> ${propietario}
              </br>
              <span class= "font-weight-bolder">Telefono:</span> ${telefono}
              </br>
              <span class= "font-weight-bolder">Fecha:</span> ${fecha}
              </br>
              <span class= "font-weight-bolder">Hora:</span> ${hora}
              </br>
              <span class= "font-weight-bolder">Síntomas:</span> ${sintomas}
              </br>
          `;

            //agregar botón para eliminar esta cita
            const btn_eliminar = document.createElement('button');
            btn_eliminar.classList.add('btn', 'btn-danger', 'mr-2');

            btn_eliminar.innerHTML = `Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;

            //evento para ejecutar boton de eliminar las citas
            btn_eliminar.onclick = () => eliminar_cita(id);

            //agregar botón para habilitar la edicion de una cita
            const btn_editar = document.createElement('button');
            btn_editar.classList.add('btn', 'btn-info', 'mr-2');

            btn_editar.innerHTML = `Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>`;

            //evento para ejecutar boton de editar las citas
            btn_editar.onclick = () => cargar_edicion_citas(cita);

            //agregar los párrafos y botones a div_cita
            div_cita.appendChild(mascota_parrafo);
            div_cita.appendChild(info_mascota_parrafo);
            div_cita.appendChild(btn_eliminar);
            div_cita.appendChild(btn_editar);

            //agregando las citas al HTML
            contenedor_citas.appendChild(div_cita);
        });

    }

    limpiar_HTML() {
        while (contenedor_citas.firstChild) {
            contenedor_citas.removeChild(contenedor_citas.firstChild);
        }
    }
}

export default UI;