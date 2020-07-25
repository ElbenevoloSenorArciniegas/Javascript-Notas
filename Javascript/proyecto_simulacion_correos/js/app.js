//Variables

//inputs
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

const btn_enviar = document.getElementById('enviar');
const form_enviar = document.getElementById('enviar-mail');

const reset_btn = document.getElementById('resetBtn');

//Event Listeners

event_listeners();

function event_listeners() {

    //inicio de la aplicación y deshabilitar botón submit
    document.addEventListener('DOMContentLoaded', iniciar_app);

    //validar campos del formulario
    email.addEventListener('blur', validar_campo);
    asunto.addEventListener('blur', validar_campo);
    mensaje.addEventListener('blur', validar_campo);

    //Boton enviar en el submit
    //forma 1
    btn_enviar.addEventListener('click', enviar_email);

    //forma 2
    //form_enviar.addEventListener('submit', enviar_email);

    reset_btn.addEventListener('click', reset_formulario);
}



//Funciones

function iniciar_app() {
    //deshabilitar el botón enviar
    btn_enviar.disabled = true;
}

//valida que el campo tenga algo escrito
function validar_campo() {
    //verificar la longitud del texto y que no esté vacío
    validar_texto_longitud(this); //this se refiere al elemento seleccionado del event listener (email, asunto o mensaje)

    //validando unicamente el email
    //console.log(this.type); //mostrar el tipo de input
    if (this.type === 'email') {
        validar_email(this);
    }

    let errores = document.querySelectorAll('.error').length;

    // if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
    //console.log(errores);
    if (errores === 0) {
        btn_enviar.disabled = false;
    } else {
        btn_enviar.disabled = true;
    }
    //  }
}

function validar_texto_longitud(campo) {
    if (campo.value.length > 0) {
        //agregar propiedad css
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error'); //quitar la clase error
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error'); //quitar la clase error
    }
}

function validar_email(campo_email) {
    const msg = campo_email.value;
    if (msg.indexOf('@') !== -1) {
        //agregar propiedad css
        campo_email.style.borderBottomColor = 'green';
        campo_email.classList.remove('error'); //quitar la clase error
    } else {
        campo_email.style.borderBottomColor = 'red';
        campo_email.classList.add('error'); //quitar la clase error
    }
}

//cuando se envía el correo
function enviar_email(event) {
    event.preventDefault();

    //spinner al presionar enviar
    const spinner_gif = document.querySelector('#spinner');
    spinner_gif.style.display = 'block';

    //gif que envía email
    const gif_enviado = document.createElement('img');
    gif_enviado.src = 'img/mail.gif';
    gif_enviado.style.display = 'block';

    //ocultar spinner y mostrar gif enviado

    //ojo: los dos setTimeOut ocurren al mismo tiempo, osea que segundo setTimeout ocurre 2 segundos después del primero

    setTimeout(function() {
        spinner_gif.style.display = 'none';
        document.getElementById('loaders').appendChild(gif_enviado);
    }, 3000);

    setTimeout(function() {
        gif_enviado.remove();

        //resetear y eliminar info del form
        form_enviar.reset();
    }, 5000);
}


function reset_formulario(event) {
    event.preventDefault();
    form_enviar.reset();
}