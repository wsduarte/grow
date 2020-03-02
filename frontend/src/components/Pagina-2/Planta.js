import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class Planta extends Component {
    state = {
        planta: this.props.planta
    }
    renderInformation(){
        return (
            <div>
                <h3>{this.state.planta.sinonimos}</h3>
                <p>Tipo de planta: {this.state.planta.habitad}</p>
                <p>Temperatura: ({this.state.planta.temperatura.min}-{this.state.planta.temperatura.max})</p>
                <p>Precipitacion: ({this.state.planta.presipitacion.min}-{this.state.planta.presipitacion.max})</p>
                <p>Elevacion: ({this.state.planta.elevacion_minima}-{this.state.planta.elevacion_maxima})</p>
                <p>Provenencia: {this.state.planta.origen}</p>
                <p>Estado de Conservacion: {this.state.planta.estado_de_conservacion}</p>
                <p>Region de Habitad: {this.state.planta.regiones_biogeograficas}</p>
                <p>Distribucion Global: {this.state.planta.distribucion_global}</p>
                <p>Departamentos donde se encuentra: {this.state.planta.departamentos}</p>
            </div>
        );
    }
    render() { 
        return (  
            <div>
                <image src={this.state.planta.img_src}></image>
                <h2>{this.state.planta.nombre}</h2> 
                <Collapsible trigger="ver+">
                    {this.renderInformation()}
                </Collapsible>
            </div>
        );
    }
}
 
export default Planta;