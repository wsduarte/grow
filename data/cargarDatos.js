const fs = require('fs');
const PlantasCollection = require('../db/PlantasCollection');
const DepartamentosCollection = require('../db/DepartamentosCollection');
const imageCrawlerService = require("../imageCrawler/ImageCrawler")
var plantaDB = new PlantasCollection();
var departamentosDB = new DepartamentosCollection();

let rutaPresipitaciones = './PrecipitacionColombia.csv';//,
let rutaTemperatura = './temperaturaColombia.csv';//,
let plantas = './Plantas/plantas{0}.csv';//;

var objDepartamento = {};
var lstPlantas = [];
var lstDepartamentos = [];

//-----------------------------------------------
// MAIN
//-----------------------------------------------
async function main()
{
  const [, temperatura] = await leerCSV(rutaTemperatura);
  temperatura.forEach(e => { objDepartamento[e[0]] = { 'temperatura' : Number(e[1]) }; });
  const [, precipitaciones] = await leerCSV(rutaPresipitaciones);
  precipitaciones.forEach(e => { objDepartamento[e[0]]['precipitacion'] = Number(e[1]) ; });
  procesarDepartamentos();
  for(var i of [1710,1738,1746])
  {
    const [cabecera,dataPlantas] = await leerCSV(plantas.replace('{0}',i), ';');
    dataPlantas.forEach(e => {
      var obj = list2obj(cabecera, e);
      calcularTemperaturaPrecipitecion(obj);
      procesarElevaciones(obj)
      lstPlantas.push(obj);
    })
  }

  const plantNames = lstPlantas.map(plant => plant.nombre)
  console.log(plantNames)
  const images = await (await imageCrawlerService).searchImages(plantNames.slice(0,20))
  lstPlantas = addImagesToPlants(lstPlantas, images)

  plantaDB.createMany(lstPlantas);
  console.log(lstPlantas);
}

main();

//-----------------------------------------------
// FUNCIONES
//-----------------------------------------------
async function leer(ruta, encode)
{
  return new Promise( (resolve, reject) => {
    fs.readFile(ruta, encode || 'utf8', (error, data) => {
      if(error)
        reject(error);
      resolve(data); 
    });
  });
}

async function leerCSV(ruta, sep = ',', encode = 'utf8')
{
  const data = await leer(ruta, encode);
  dataArray = data.split(/\r?\n/).map( row => row.split(sep) )
  return [dataArray.shift(), dataArray];
}

function list2obj(propiedades, valores)
{
  var ret = {};
  for(var i in propiedades)
    ret[propiedades[i]] = valores[i];
  return ret;
}

function calcularTemperaturaPrecipitecion(obj)
{
  var lstDep = obj['departamentos'].split(',');
  var lstTem = [];
  var lstPre = [];
  for(var dep of lstDep)
  {
    var res = objDepartamento[dep.trim()];
    if(res){
      lstTem.push(res['temperatura']);
      lstPre.push(res['precipitacion']);
    } 
  }
  obj['temperatura'] = {
    'min':Math.min.apply(null, lstTem),
    'max':Math.max.apply(null, lstTem)
  }
  obj['precipitacion'] = {
    'min':Math.min.apply(null, lstPre),
    'max':Math.max.apply(null, lstPre)
  }
}

function procesarElevaciones (obj){
  obj["elevacion_minima"] = parseInt(obj["elevacion_minima"].split(" ")[0], 10)
  obj["elevacion_maxima"] = parseInt(obj["elevacion_maxima"].split(" ")[0], 10)
}

function addToObject (obj,key,value){
  obj[key]=value;
  return obj;
}

function addImagesToPlants (plants, images){
  return plants.map((plant, idx) => addToObject(plant,"img_src",images[Math.floor(Math.random()*21)]))
}

function procesarDepartamentos()
{
  var lstDepartamentos = [];
  for(var value in objDepartamento)
  {
    lstDepartamentos.push({
      'nombre' : value,
      'temperatura' : objDepartamento[value]['temperatura'],
      'precipitacion' : objDepartamento[value]['precipitacion']
    });
  }
  //departamentosDB.createMany(lstDepartamentos);
  console.log(lstPlantas);
}