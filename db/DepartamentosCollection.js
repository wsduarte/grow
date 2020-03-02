//--------------------------------------------
// Modulos
//--------------------------------------------
const Mongolib = require('./Mongolib');

/**
 * Clase encargada del manejo de la coleción cultivos.departamentos
 */
class DepartamentosCollection extends Mongolib {
    constructor() {
        super('departamentos');
    }
}

//--------------------------------------
// Exportación del modulo
//--------------------------------------
module.exports = DepartamentosCollection;