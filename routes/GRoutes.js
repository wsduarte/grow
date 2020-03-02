//--------------------------------------------
// Modulos
//--------------------------------------------
var express = require('express');

/**
 * Id function - Returns its argument inside a promise.
 * Used as an idempotent operation for the transform
 * function used below
 * @param {*} x 
 */
const id = x => new Promise(
    (resolve, reject) => resolve(x)
)

/**
 * Funcion que retorna una instancia configurada con servicios básicos de un raoute
 */
function crearRoute(transform = id)
{
    var router = express.Router();

    //--------------------------------------------
    // Definición de los servicio
    //--------------------------------------------
    /**
     * Función que inicializa el cliente de conexión a base de datos
     * @param {Mongolib} instancia del cliente de base de datos con la colección configurada
     */
    router.inicializar = function (cliente) {
        router.clienteBD = cliente;
        router.Send = Send;
        router.Catch = Catch;
        router.transformMany = transformMany;
    }

    /**
     * Servicio para la creación de una nueva entidad
     * Realiza el registro de la entidad en base de datos enviada en el cuerpo de la petición.
     * POST /
     */
    router.post('/', function(req, res, next) {
        router.clienteBD.create(req.body).then(Send(res)).catch(Catch(res));
    });

    /**
     * Servicio para obtener la lista de entidades
     * Realiza la consulta de a la base de datos y envía la lista de resultados. Utiliza los parametros de la petición para definir una consulta básica
     * GET /
     */
    router.get('/', function(req, res, next) {
        router.clienteBD.getAll(req.query).then(data => transformMany(data, transform)).then(Send(res)).catch(Catch(res));
    });

    /**
     * Servicio para la obtención de una entidd especifica de acuerdo a un identificador.
     * Realiza la consulta por el identificador especificado en el parametro de la URL
     * GET /{id}
     */
    router.get('/:id', function(req, res, next) {
        router.clienteBD.get(req.params.id+"").then(data => transform(data)).then(Send(res)).catch(Catch(res));
    });

    /**
     * Servicio para modificar una entidad especificada con un identificador.
     * Realiza la modificación de los valores de la entidad especificada por el paraetro de la URL con los valores enviados en el cuerpo de la petición
     * PUT /{id}
     */
    router.put('/:id', function(req, res, next) {
        router.clienteBD.update(req.params.id, req.body).then(data => transform(data)).then(Send(res)).catch(Catch(res));
    });

    /**
     * Servicio para eliminar una entidad de acuerdo a un identificador especificado.
     * Realiza la eliminación de la entidad con identificador respecificado en el parametro de la URL
     * DELETE /{id}
     */
    router.delete('/:id', function(req, res, next) {
        router.clienteBD.delete(req.params.id, req.body).then(data => transform(data)).then(Send(res)).catch(Catch(res));
    });

    return router;
}

//--------------------------------------
// Funciones auxiliares
//--------------------------------------

/**
 * Realiza el envío de información de respuesta al cliente de la petición
 * @param {Request} res Canal de comunicación del cliente
 * @returns Función que recibe la información de la respuesta y la envía al cliente
 */
function Send(res) {
    return function(data) {
        console.log('Envío de información al cliente');
        console.log(data);
        res.send(data || {});
    }
}

/**
 * Returns an array of transform promises applied to an array of objects 
 * @param {Array} data 
 * @param {Promise} transform 
 */
function transformMany (data, transform) {
    const mapPromises = data.map(
        e => transform(e).then(
            res => res
        )
    )
    return Promise.all(mapPromises)
}

/**
* Realiza el envío de un error al cliente de la petición
* @param {Request} res Canal de comunicación del cliente 
* @returns Función que recibe la información de un error y la envía al cliente
*/
function Catch(res) {
    return function(data) {
        console.log('Error presentado durante la petición.')
        console.log(data)
        res.send(data);
    }
}

//--------------------------------------
// Exportación del modulo
//--------------------------------------
module.exports = crearRoute;
