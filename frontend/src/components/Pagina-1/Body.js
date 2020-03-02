import React from 'react';
import {
  Redirect
} from "react-router-dom";
import Background from '../img/background.jpg';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrerDepto: false, redirectToReferrerCond: false, departamentos:['Cargando...'],departamento: 'Norte de Santander', temperatura: 0, precipitacion: 0, elevmin: 0, elevmax: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitDepto = this.handleSubmitDepto.bind(this);
    this.handleSubmitCond = this.handleSubmitCond.bind(this);
    fetch("http://localhost:3000/departamentos")
            .then(res => {
              return res.json();
            }).then(p => {
              this.setState({
                departamentos: p.map((e, i) => e.nombre)
              });
            })
  }

  
  /**
   * Controla el cambio de las forms. 
   */
  handleChange(event) {
    const target = event.target;

    const value = target.value;

    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  /**
   * Controla el envio y redireccionamiento de la form de departamento
   */
  handleSubmitDepto(event) {
    //Redireccionar a pagina web
    this.setState({
      redirectToReferrerDepto: true
    });
  }
  /**
   * Controla el envio y redireccionamiento de las forms de condiciones. 
   */
  handleSubmitCond(event) {
    //Redireccionar a pagina web
    this.setState({
      redirectToReferrerCond: true
    });
  }
  /**
   * Render del modulo.
   */
  render() {
    if (this.state.redirectToReferrerDepto === true) {
      return (<Redirect to={`/search/${this.state.departamento}`} />);
    }
    if (this.state.redirectToReferrerCond === true) {
      return (<Redirect to={`/search/${this.state.temperatura}/${this.state.precipitacion}/${this.state.elevmin}/${this.state.elevmax}`} />);
    }
    
    
    return (
      <div className="container-fluid" style={{
        height: "90vh", backgroundImage: `url(${Background})`, backgroundSize: 'cover'
      }}>
        <div className="row" style={{ height: '10%' }} align="center"></div>
        <div className="row" style={{ height: '20%' }} align="center">
          <div className="h3" style={{ color: "white", flex: 1, alignItems: "center" }} > Ingresa el departamento o las condiciones de tu cultivo!</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body ">
                <h5 className="card-title" align="center">Departamento</h5>
                <form onSubmit={this.handleSubmitDepto}>
                  <label className="d-flex align-items-center">
                    Selecciona tu departamento:<select name="departamento" className="form-control " value={this.state.departamento} onChange={this.handleChange}>
                      {this.state.departamentos.map((e, i) => <option key={i} value={e} >{e}</option>)}
                    </select>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                  </label>

                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" align="center">Condiciones</h5>
                <form onSubmit={this.handleSubmitCond}>
                  <div className="form-group">
                    <label >Temperatura</label>
                    <input name="temperatura" type="number" className="form-control" value={this.state.temperatura}
                      onChange={this.handleChange} />
                  </div>

                  <div className="form-group">
                    <label >Precipitacion</label>
                    <input name="precipitacion" type="number" className="form-control" value={this.state.precipitacion}
                      onChange={this.handleChange} />
                  </div>
                  <div className="input-group">


                    <label className="col-form-label" >Elevacion Min</label>
                    <input name="elevmin" min="0" type="number" className="form-control" value={this.state.elevmin}
                      onChange={this.handleChange} />
                    <label className="col-form-label">Elevacion   Max</label>
                    <input name="elevmax" min="0" type="number" className="form-control" value={this.state.elevmax}
                      onChange={this.handleChange} />
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}