class Citas {
    constructor() {
        this.listado_espera = [];
    }

    agregar_cita(cita) {
        this.listado_espera = [...this.listado_espera, cita];
        //console.log(this.listado_espera);
    }

    eliminar_cita(id) {
        // recrear el listado pasando las citas con ids diferente al que se paso como argumento
        this.listado_espera = this.listado_espera.filter(cita => cita.id !== id);
    }

    editar_cita(cita_actualizada) {
        this.listado_espera = this.listado_espera.map(cita => cita.id === cita_actualizada.id ? cita_actualizada : cita);

        // el .map devuelve un nuevo array con los elementos editados bajo condiciones
        // para cada cita en el array, explicacion de ese ternario ->

        //if(cita.id === cita_actualizada.id)
        //cita = cita_actualizada
        //else cita no se modifica
    }
}

export default Citas;