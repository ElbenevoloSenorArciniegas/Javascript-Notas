import {
    mascota_input,
    propietario_input,
    telefono_input,
    fecha_input,
    hora_input,
    sintomas_input,
    formulario
} from '../selectores.js'

import {
    datos_cita,
    agregar_nueva_cita
} from '../funciones.js';



class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        //  mascota_input.addEventListener('change', datos_cita);
        mascota_input.addEventListener('input', datos_cita);
        propietario_input.addEventListener('input', datos_cita);
        telefono_input.addEventListener('input', datos_cita);
        fecha_input.addEventListener('input', datos_cita);
        hora_input.addEventListener('input', datos_cita);
        sintomas_input.addEventListener('input', datos_cita);

        formulario.addEventListener('submit', agregar_nueva_cita);
    }
}

export default App;