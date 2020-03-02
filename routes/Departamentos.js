//--------------------------------------------
// Modulos
//--------------------------------------------
var router = require('./GRoutes')();
var DepartamentosCollection = require('../db/DepartamentosCollection')

//--------------------------------------------
// Definición de los servicios
//--------------------------------------------

/**
 * Cliente de conexión a la colección cutivos.departamentos
 */
var clienteBD = new DepartamentosCollection();

//Inicialización de las rutas básicas
router.inicializar(clienteBD)

//--------------------------------------
// Exportación del modulo
//--------------------------------------
module.exports = router;