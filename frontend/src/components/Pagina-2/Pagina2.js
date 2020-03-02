import React from 'react';
import Body2 from './Body2';
import Search from './Search';

export default class Pagina2 extends React.Component {
  /**
   * Constructor del componente.
   */
  constructor(props) {
    super(props);
    this.state = { temperatura: 0, precipitacion: 0, elevmin: 0, elevmax: 0, plantas: [] };

  }
  /**
   * Componente que realiza el fetch de los datos al back.
   */
  componentDidMount() {
    
    const url = "/planta/f/tpe?";

    if (this.props.match) {
      try {
        if (this.props.match.path === "/search/:departamento") {
          const urlDepto = "/planta/departamento/";
          fetch(urlDepto + this.props.match.params.departamento + "?num_pagina=2&cantidad=2")
            .then(res => {
              return res.json();
            }).then(p => {
              console.log(p)
              this.setState({ plantas: p })    
            })
        }
        else if (this.props.match.path === "/search/:temperatura/:precipitacion/:elevacionMin/:elevacionMax") {


          console.log(this.props.match)
          fetch(url + "temp=" + this.props.match.params.temperatura + "&prec=" + this.props.match.params.precipitacion + "&min=" + this.props.match.params.elevacionMin + "&max=" + this.props.match.params.elevacionMax)
            .then(res => {

              return res.json();
            }).then(p => {
              console.log(p)
              this.setState({ plantas: p })
            })
          console.log(this.state.plantas)
        }
        
      } catch (err) {
        alert(err);
      }
    }


  }
  /**
   * Render del modulo.
   */
  render() {
    return (
      <div>
      <Body2 />
      <Search plantas = {(this.state.plantas)} ></Search>
>
      </div>
      
    );
  }
}
