//--------------------------------------------
// Modulos
//--------------------------------------------
var router = require('./GRoutes')(buildPlant);
var PlantasCollection = require('../db/PlantasCollection')
var objPlanta = require('../repository/objPlanta')
const imageCrawlerService = require("../imageCrawler/ImageCrawler")
//--------------------------------------------
// Definición de los servicios
//--------------------------------------------

/**
 * Cliente de conexión a la colección cutivos.planatas
 */
var clienteBD = new PlantasCollection();

//Inicialización de las rutas básicas
router.inicializar(clienteBD)

/**
 * Servicio para econsultar las plantas que se puedna cultivar en un departamento especifico.
 * Realiza la consulta de las entidades que se cultiven en el departamento respecificado en el parametro de la URL
 * GET /departamento/{departamento}
 */
router.get('/departamento/:departamento', function(req, res, next) {
    clienteBD.getPlantaDepartamento(req.params.departamento, req.query.num_pagina, req.query.cantidad)
    .then(data => router.transformMany(data, buildPlant)).then(router.Send(res)).catch(router.Catch(res))
});

/**
* Servicio para obtener la lista de entidades
* Realiza la consulta de a la base de datos y envía la lista de resultados implementando paginación.
* GET /pagina/{num_pagina}/{cantidad}
*/
router.get('/pagina/:num_pagina/:cantidad', async function(req, res, next) {
    clienteBD.getPlantasPage(req.params.num_pagina,req.params.cantidad).then(data => router.transformMany(data, buildPlant)).then(router.Send(res)).catch(router.Catch(res));
});

/**
* Servicio para obtener la lista de entidades filtradas por temperatura, prec, y elev
* Realiza la consulta de a la base de datos y envía la lista de resultados filtrandolos
* GET /f/tpe{temp= &prec= & elevmin= & elevmax= }
*/
router.get('/f/tpe', function(req, res, next) {
    const temp = parseInt(req.query.temp) || 9999
    const prec = parseInt(req.query.prec) || 9999
    const elevmin = parseInt(req.query.elevmin) || -9999
    const elevmax = parseInt(req.query.elevmax) || 9999
    console.log(temp)
    console.log(prec)
    console.log(elevmin)
    console.log(elevmax)

    console.log(typeof(temp))
    clienteBD.getAll({
        ['temperatura.min']:{$lte:temp},
        ['temperatura.max']:{$gte:temp},
        ['precipitacion.min']:{$lte:prec},
        ['precipitacion.max']:{$gte:prec}, 
        ['elevacion_minima']:{$gte:elevmin}, 
        ['elevacion_maxima']:{$lte:elevmax}

        
    
    }).then(data => router.transformMany(data, buildPlant)).then(router.Send(res)).catch(router.Catch(res));
});

/**
 * Builds a new Plant object in accordance to the model defined in
 * the repository module and the incoming data
 * @param {Object} data 
 */
function buildPlant (data, img_src = ""){
    console.log(data)
    // return imageCrawlerService.then(utils => 
    //     utils.searchImage(data.nombre)
    // ).then(
    //     img_src => new objPlanta(data._id,data.nombre, data.sinonimos,data.habito,data.origen,data.estado_de_conservacion,
    //         data.regiones_biogeograficas,data.elevacion_minima,data.elevacion_maxima,data.departamentos,data.distribucion_global,
    //         data.temperatura,data.precipitacion, img_src)
    // )
    return new Promise(
        (resolve, reject) => resolve (new objPlanta(data._id,data.nombre, data.sinonimos,data.habito,data.origen,data.estado_de_conservacion,
            data.regiones_biogeograficas,data.elevacion_minima,data.elevacion_maxima,data.departamentos,data.distribucion_global,
            data.temperatura,data.precipitacion, data.img_src))
        )
}

// /**
//  * Given an array of plant objects, returns an array of the sources of the 
//  * images by plant name
//  * @param {Array} data 
//  */
// function retreivePlantImages (data){
//     return imageCrawlerService.then( utils => 
//         utils.searchImages(data.map(plant => plant.nombre))
//     )
// }

/**
 * Given two arrays xs and ys, returns another one with 
 * tuples composed by two elements of the arrays over, the
 * same index. i.e: zip(xs, ys)[i] = [xs[i], ys[i]] for 
 * i in (0..n)
 * @param {Array} xs 
 * @param {Array} ys 
 */
function zip (xs, ys){
    return xs.map((x, idx) => [x, ys[idx]])
}


//--------------------------------------
// Exportación del modulo
//--------------------------------------
module.exports = router;