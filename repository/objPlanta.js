function Planta (id, nombre, sinonimos, habitat, origen, 
    estado_de_conservacion,regiones_biogeograficas,elevacion_minima, elevacion_maxima, departamentos, distribucion_global, temperatura, presipitacion, img_src) {
        
        this.id = id
        this.nombre = nombre
        this.sinonimos = sinonimos
        this.habitat = habitat
        this.origen = origen
        this.estado_de_conservacion = estado_de_conservacion
        this.regiones_biogeograficas = regiones_biogeograficas
        this.elevacion_maxima = elevacion_maxima
        this.elevacion_minima = elevacion_minima
        this.departamentos = departamentos
        this.distribucion_global = distribucion_global
        this.temperatura = temperatura
        this.presipitacion = presipitacion
        this.img_src = img_src
}

module.exports = Planta;
