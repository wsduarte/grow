//--------------------------------------------
// Modulos
//--------------------------------------------
const Mongolib = require('./Mongolib');

/**
 * Clase encargada del manejo de la coleción cultivos.plantas
 */
class PlantasCollection extends Mongolib {
    constructor() {
        super('plantas');
    }

    async getPlantasPage(numPage, limit)
    {
        numPage = Number(numPage);
        limit = Number(limit);
        const collection = await this.connect();
        return collection.find({}).skip(limit*(numPage-1)).limit(limit).toArray()
    }

    async getPlantaDepartamento(departamento, numPage, limit)
    {
        const collection = await this.connect();
        if(numPage && limit)
        {
            numPage = Number(numPage);
            limit = Number(limit);
            return collection.find({ 'departamentos' : {'$regex': String(departamento), "$options": "i" } })
            .skip(limit*(numPage-1)).limit(limit).toArray();
        }
        else
        {
            return collection.find({ 'departamentos' : {'$regex': String(departamento), "$options": "i" } })
            .toArray();
        }
        
    }
}

//--------------------------------------
// Exportación del modulo
//--------------------------------------
module.exports = PlantasCollection;