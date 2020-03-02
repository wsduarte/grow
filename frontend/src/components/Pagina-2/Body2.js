import React from 'react';
import Background from '../img/background.jpg';
export default class Body2 extends React.Component {
  /**
   * Render del modulo.
   */
  render() {

    return (
      <div className="container-fluid" style={{ height: "90vh", backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
        <div className="row" style={{ height: '10%' }} align="center"></div>
        <div className="row" style={{ height: '20%' }} align="center">
          <div className="h3" style={{ color: "white", flex: 1, alignItems: "center" }} >Lista de plantas:</div>
        </div>
      </div>

    );
  }
}