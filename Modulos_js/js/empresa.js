import { Cliente } from './cliente.js';

//heredando desde clases importadas
class Empresa extends Cliente {
    constructor(nombre, edad, categoria) {
        super(nombre, edad);
        this.categoria = categoria;
    }
}

export { Empresa };