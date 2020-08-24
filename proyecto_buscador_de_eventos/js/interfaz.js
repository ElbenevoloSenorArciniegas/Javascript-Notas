//archivo para las funciones del html

class Interfaz {

    constructor() {

        //inicializar la app al instanciar
        this.init();

        //obtener el elemento para luego agregar el resultado de la consulta a la API
        this.listado = document.getElementById('resultado-eventos');

    }

    //Metodo para cuando inicialize la API
    init() {
        this.imprimir_categorias();
    }

    //Imprimir categorias en el select de "categoria evento"
    imprimir_categorias() {

        //evenbrite es el objeto que se creó en app.js para realizar operaciones con la API
        const lista_categorias = evenbrite.obtener_categorias()
            .then(respuesta => {
                const categorias = respuesta.categorias.categories;

                //tomar el select de categorias y llenarlo
                const select_categoria = document.getElementById('listado-categorias');

                categorias.forEach(cate => {
                    const option = document.createElement('option');
                    option.value = cate.id;
                    option.appendChild(document.createTextNode(cate.name_localized));

                    select_categoria.appendChild(option);
                });
            });
    }

    //metodo para imprimir alert mensajes 
    mostrar_mensaje(tipo_alert_clase, mensaje) {
        const div = document.createElement('div');
        div.classList = tipo_alert_clase;
        div.appendChild(document.createTextNode(mensaje));

        //buscar elemento padre
        const buscador_div = document.querySelector('#buscador');
        //mostrar mensaje
        buscador_div.appendChild(div);

        setTimeout(() => {
            this.limpiar_mensaje();
        }, 3000);

    }

    //ocultar alerts
    limpiar_mensaje() {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }
}