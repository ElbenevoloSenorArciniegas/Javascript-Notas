//variables

//campos del formulario
const mascota_input = document.querySelector('#mascota');
const propietario_input = document.querySelector('#propietario');
const telefono_input = document.querySelector('#telefono');
const fecha_input = document.querySelector('#fecha');
const hora_input = document.querySelector('#hora');
const sintomas_input = document.querySelector('#sintomas');

//use interface
const formulario = document.querySelector('#nueva-cita');
const contenedor_citas = document.querySelector('#citas');

let editando;

//clases

class Citas {
    constructor (){
        this.listado_espera = [];
    }

    agregar_cita(cita){
        this.listado_espera = [...this.listado_espera, cita];
        //console.log(this.listado_espera);
    }

    eliminar_cita(id){
        // recrear el listado pasando las citas con ids diferente al que se paso como argumento
        this.listado_espera = this.listado_espera.filter(cita => cita.id !== id);
    }

    editar_cita(cita_actualizada){
        this.listado_espera = this.listado_espera.map(cita => cita.id === cita_actualizada.id ? cita_actualizada : cita);

        // el .map devuelve un nuevo array con los elementos editados bajo condiciones
        // para cada cita en el array, explicacion de ese ternario ->

        //if(cita.id === cita_actualizada.id)
        //cita = cita_actualizada
        //else cita no se modifica
    }
}

class UI {
    imprimir_alerta(mensaje, tipo){
        const div_mensaje = document.createElement('div');
        div_mensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        //agregar clase en base al tipo de error
        if(tipo === 'error') div_mensaje.classList.add('alert-danger');
        else div_mensaje.classList.add('alert-success');


        //mensaje de error o de exito
        div_mensaje.textContent = mensaje;

        //agregando al DOM
        document.querySelector('#contenido').insertBefore(div_mensaje, document.querySelector('.agregar-cita'));

        //quitar alerta despues de algunos segundos
        setTimeout (() => {
            div_mensaje.remove();
        }, 5000);
    }

    imprimir_citas({listado_espera}){
        
        // Se puede hacer destructuring en los parámetros de la funcion, para solo extraer las propiedades de ese objeto que estoy pasando como argumento, solo las que se vana  usar
        //const {citas} = citas;

        this.limpiar_HTML();

        listado_espera.forEach(cita => {
            //extraer la info del objeto de la cita
            const {id, mascota, propietario, telefono, fecha, hora, sintomas} = cita;

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

    limpiar_HTML(){
        while(contenedor_citas.firstChild){
            contenedor_citas.removeChild(contenedor_citas.firstChild);
        }
    }
}

const ui = new UI();
const administrador_citas = new Citas();




event_listeners();

function event_listeners(){
   //  mascota_input.addEventListener('change', datos_cita);
     mascota_input.addEventListener('input', datos_cita);
     propietario_input.addEventListener('input', datos_cita);
     telefono_input.addEventListener('input', datos_cita);
     fecha_input.addEventListener('input', datos_cita);
     hora_input.addEventListener('input', datos_cita);
     sintomas_input.addEventListener('input', datos_cita);

     formulario.addEventListener('submit', agregar_nueva_cita);
}

//obj con la info que el usuario registra de la cita
const cita_obj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
};

function datos_cita(event){
  //event.target.value
  //el target es para acceder a todos los atributos de una etiqueta html (como el id, class, el name, el value, etc)

  //editando sobre el objeto
  cita_obj[event.target.name] = event.target.value;

}

// valida y agrega una cita a la clase Cita
function agregar_nueva_cita(event){
    event.preventDefault();

    //extraer la info del objeto de la cita
    const {mascota, propietario, telefono, fecha, hora, sintomas} = cita_obj;

    //validando campos vacios
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){

        //mostrar en user interface 
        ui.imprimir_alerta('todos los campos son obligatorios', 'error'); 

        return;
    }
    //revisar si es en modo de edición o se está agregando una nueva cita
    if(editando){
       
        //mostrar mensaje
        ui.imprimir_alerta('Editado correctamente');

        //pasar el objeto de la cita a edición
        administrador_citas.editar_cita({...cita_obj});

        //cambiar el texto del boton a modo "crear cita"
        formulario.querySelector('button[type="submit"]').textContent = "Crear cita";

        //quitar modo edicion 
        editando = false;
    }else{ //modo agregar nueva cita

        //generar un id unico para la cita
        cita_obj.id = Date.now();

        //agregando una nueva cita
        administrador_citas.agregar_cita({...cita_obj}); // se pasa una copia de ese objeto cita, en vez de una referencia directa, para que el array de listado_espera no duplique los registros

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

function reiniciar_objeto(){
        cita_obj.mascota = '';
        cita_obj.propietario = '';
        cita_obj.telefono = '';
        cita_obj.fecha =  '';
        cita_obj.hora = '';
        cita_obj.sintomas = '';
}

//eliminando la cita del listasdo de la clase Cita
function eliminar_cita(id){
    //eliminar la cita 
    administrador_citas.eliminar_cita(id);

    //mostrar mensaje
    ui.imprimir_alerta('La cita se eliminó correctamente');

    //refrescar las citas
    ui.imprimir_citas(administrador_citas);
}

//cargar los datos y el modo de edición
function cargar_edicion_citas(cita){
    
    editando = true;
    //extraer la info del objeto de la cita
    const {id, mascota, propietario, telefono, fecha, hora, sintomas} = cita;

    //rellenar los inputs de formulario con la info de la cita
    mascota_input.value = mascota;
    propietario_input.value = propietario;
    telefono_input.value = telefono;
    fecha_input.value = fecha;
    hora_input.value = hora;
    sintomas_input.value = sintomas;

    //llenar el objeto. porque se va a usar la misma funcionalidad de crear cita, eliminando registros antiguos y agregando nuevos
    cita_obj.mascota = mascota;
    cita_obj.propietario = hora;
    cita_obj.telefono = propietario;
    cita_obj.fecha =  fecha;
    cita_obj.hora = hora;
    cita_obj.sintomas = sintomas;
    cita_obj.id = id;


    //cambiar el texto del boton a modo edicion
    formulario.querySelector('button[type="submit"]').textContent = "Guardar cambios";

}