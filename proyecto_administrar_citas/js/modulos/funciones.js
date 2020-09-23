import Citas from './clases/Citas.js';
import UI from './clases/UI.js';

import {
    mascota_input,
    propietario_input,
    telefono_input,
    fecha_input,
    hora_input,
    sintomas_input,
    formulario
} from './selectores.js'

let editando;

const ui = new UI();
const administrador_citas = new Citas();

//obj con la info que el usuario registra de la cita
const cita_obj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
};

//funcion para actualizar el objeto cita_obj
function datos_cita(event) {
    //event.target.value
    //el target es para acceder a todos los atributos de una etiqueta html (como el id, class, el name, el value, etc)

    //editando sobre el objeto
    cita_obj[event.target.name] = event.target.value;

}

// valida y agrega una cita a la clase Cita
function agregar_nueva_cita(event) {
    event.preventDefault();

    //extraer la info del objeto de la cita
    const { mascota, propietario, telefono, fecha, hora, sintomas } = cita_obj;

    //validando campos vacios
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {

        //mostrar en user interface 
        ui.imprimir_alerta('todos los campos son obligatorios', 'error');

        return;
    }
    //revisar si es en modo de edición o se está agregando una nueva cita
    if (editando) {

        //mostrar mensaje
        ui.imprimir_alerta('Editado correctamente');

        //pasar el objeto de la cita a edición
        administrador_citas.editar_cita({...cita_obj });

        //cambiar el texto del boton a modo "crear cita"
        formulario.querySelector('button[type="submit"]').textContent = "Crear cita";

        //quitar modo edicion 
        editando = false;
    } else { //modo agregar nueva cita

        //generar un id unico para la cita
        cita_obj.id = Date.now();

        //agregando una nueva cita
        administrador_citas.agregar_cita({...cita_obj }); // se pasa una copia de ese objeto cita, en vez de una referencia directa, para que el array de listado_espera no duplique los registros

        //mostrar mensaje
        ui.imprimir_alerta('Se agregó correctamente');
    }

    //reiniciar el formulario, limpiar campos
    formulario.reset();

    //limpiar el objeto
    reiniciar_objeto();

    //mostrar el HTML de las citas
    ui.imprimir_citas(administrador_citas);
}


//eliminando la cita del listado de la clase Cita
function eliminar_cita(id) {
    //eliminar la cita 
    administrador_citas.eliminar_cita(id);

    //mostrar mensaje
    ui.imprimir_alerta('La cita se eliminó correctamente');

    //refrescar las citas
    ui.imprimir_citas(administrador_citas);
}

//cargar los datos y el modo de edición
function cargar_edicion_citas(cita) {

    editando = true;
    //extraer la info del objeto de la cita
    const { id, mascota, propietario, telefono, fecha, hora, sintomas } = cita;

    //rellenar los inputs de formulario con la info de la cita
    mascota_input.value = mascota;
    propietario_input.value = propietario;
    telefono_input.value = telefono;
    fecha_input.value = fecha;
    hora_input.value = hora;
    sintomas_input.value = sintomas;

    //llenar el objeto. porque se va a usar la misma funcionalidad de crear cita, eliminando registros antiguos y agregando nuevos
    cita_obj.mascota = mascota;
    cita_obj.propietario = propietario;
    cita_obj.telefono = telefono;
    cita_obj.fecha = fecha;
    cita_obj.hora = hora;
    cita_obj.sintomas = sintomas;
    cita_obj.id = id;


    //cambiar el texto del boton a modo edicion
    formulario.querySelector('button[type="submit"]').textContent = "Guardar cambios";

}

function reiniciar_objeto() {
    cita_obj.mascota = '';
    cita_obj.propietario = '';
    cita_obj.telefono = '';
    cita_obj.fecha = '';
    cita_obj.hora = '';
    cita_obj.sintomas = '';
}

export {
    datos_cita,
    agregar_nueva_cita,
    eliminar_cita,
    cargar_edicion_citas
}