//variables
const presupuesto_usuario = prompt('Cual es tu presupuesto semanal');
const formulario = document.getElementById('agregar-gasto'); //tomar el formulario
let cantidad_presupuesto;


//clases

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = this.presupuesto;
    }

    presupuesto_restante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }
}

//la clase interfaz maneja todo lo relacionado al HTML
class Interfaz {
    insertar_presupuesto(cantidad) {
        const presupuesto_span = document.querySelector('span#total');
        const restante_span = document.querySelector('span#restante');

        //insertar al html
        presupuesto_span.innerHTML = `${cantidad}`;
        restante_span.innerHTML = `${cantidad}`;
    }

    imprimir_mensaje(mensaje, tipo_mensaje) {
        const div_mensaje = document.createElement('div');
        div_mensaje.classList.add('text-center', 'alert');

        if (tipo_mensaje == 'error') {
            div_mensaje.classList.add('alert-danger');
        } else {
            div_mensaje.classList.add('alert-success');
        }

        // agregar el texto al mensaje
        div_mensaje.appendChild(document.createTextNode(mensaje));

        //Insertar en el DOM, mostrar el mensaje antes del formulario
        document.querySelector('.primario').insertBefore(div_mensaje, formulario);

        setTimeout(function() {
            //eliminar el mensaje de advertencia
            document.querySelector('.primario .alert').remove();
            formulario.reset(); // eliminar toda la info del formulario
        }, 3000);
    }

    //mostrar nuevo gasto en el html
    agregar_gasto_listado(nombre_gasto, cnt_gasto) {
        const gastos_listado = document.querySelector('#gastos ul'); //donde se va a agregar ese nuevo gasto

        //crear li para el gasto
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        li.innerHTML = `
          ${nombre_gasto}
          <span class = "badge badge-primary badge-pill"> $${cnt_gasto} </span>
        `;

        //insertar en el ul
        gastos_listado.appendChild(li);
    }

    //comprueba el presupuesto restante
    presupuesto_restante() {
        //console.log(cantidad_presupuesto);

        const restante_span = document.querySelector('span#restante');
        restante_span.innerHTML = `${cantidad_presupuesto.restante}`;
        this.comprobar_presupuesto();


    }

    comprobar_presupuesto() {
        const restante_div = document.querySelector('.restante');

        const presupuesto_total = cantidad_presupuesto.presupuesto;
        const presupuesto_restante = cantidad_presupuesto.restante;

        //comprobar si se ha gastado más del 75% del gasto total
        if ((presupuesto_total / 4) > presupuesto_restante) {

            //limpiar las clases de este elemento y agregar otras nuevas
            restante_div.classList.remove('alert-success alert-warning');
            restante_div.classList.add('alert-danger');

        } else if ((presupuesto_total / 2) > presupuesto_restante) { //comprobar si se ha gastado más del 50% del gasto total
            restante_div.classList.remove('alert-success');
            restante_div.classList.add('alert-warning');
        }
    }

}
//Event Listeners

document.addEventListener('DOMContentLoaded', function() {
    if (presupuesto_usuario === null || presupuesto_usuario === '' || isNaN(Number(presupuesto_usuario))) {
        //isNaN(Number(presupuesto_usuario))-> para validar no haber pasado cadenas de texto como entrada
        window.location.reload(); // recargar página
    } else {
        cantidad_presupuesto = new Presupuesto(presupuesto_usuario);
        //console.log(cantidad_presupuesto);

        //Instanciar la clase Interfaz
        const user_interface = new Interfaz();
        user_interface.insertar_presupuesto(cantidad_presupuesto.presupuesto);
    }
});

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    //leer del formulario de gastos
    const gasto = document.querySelector('#gasto').value;
    const cnt_gastada = document.querySelector('#cantidad').value;

    //Instanciar la interfaz
    const user_interface = new Interfaz();
    if (gasto === '' || cnt_gastada === '' || isNaN(Number(cnt_gastada))) {
        user_interface.imprimir_mensaje('Hubo un error', 'error');
    } else {
        user_interface.imprimir_mensaje('Presupuesto actualizado', 'correcto');

        //mostrar ese gasto en el DOM
        user_interface.agregar_gasto_listado(gasto, cnt_gastada);

        //actualizar el presupuesto
        cantidad_presupuesto.presupuesto_restante(Number(cnt_gastada));

        //actualizar en el html el presupuesto y mostrar cuando ya se acaba el dinero con colores
        user_interface.presupuesto_restante();
    }
});