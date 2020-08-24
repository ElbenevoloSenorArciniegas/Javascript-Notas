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

        //api es el objeto que se creó en app.js para realizar operaciones con la API
        const lista_categorias = api.obtener_categorias()
            .then(respuesta => {

                const categorias = respuesta.categorias._embedded.classifications;

                //tomar el select de categorias y llenarlo
                const select_categoria = document.getElementById('listado-categorias');

                categorias.forEach(cate => {

                    const option = document.createElement('option');

                    let nombre;

                    //aveces en el objeto no existe la propiedad "type", sino la propiedad "segment"
                    try {
                        nombre = cate.type.name;
                    } catch (err) {
                        // console.log(err);
                        nombre = cate.segment.name;
                    }

                    option.value = nombre; // para luego hacer las búsquedas por nombre
                    option.appendChild(document.createTextNode(nombre));

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

    //mostrar eventos
    mostrar_eventos(lista_eventos) {

        //limpiar resultado antiguo
        this.listado.innerHTML = "";

        lista_eventos.forEach((evento) => {

            let img_src = '';
            if (evento.images !== null) img_src = evento.images[0].url;

            let descripcion_evento = 'Descripción no disponible';

            if (evento.description !== undefined) {
                descripcion_evento = evento.description;
            } else if (evento.info !== undefined) {
                descripcion_evento = evento.info;
            } else if (evento.pleaseNote !== undefined) {
                descripcion_evento = evento.pleaseNote;
            }

            this.listado.innerHTML += `
                <div class="col-md-4 md-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${img_src}">
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name}</h2>
                                
                                <p class="lead text-info text-center">Información del evento</p>
                                
                                <p>${descripcion_evento.substring(0,200)}...</p>
                                
                                <span class="badge badge-primary">Estatus: ${evento.dates.status.code}</span>
                                
                                <span class="badge badge-primary">Fecha del evento: ${evento.dates.start.localDate}</span>
                               
                                <a href="${evento.url}" class="btn btn-primary btn-block mt-4" target="_blank">Comprar boletos</a>

                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}