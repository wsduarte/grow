import React from 'react';
import {
  Link
} from "react-router-dom";
import Logo from './img/logo.png';

export default class Navbar extends React.Component {
  
  /**
   * Render del modulo.
   */
  render() {
    return (
      <nav style={{ alignItems: "center", background: '#507433' }} className="navbar navbar-expamd-md navbar-light sticky-top ">
        <div className="container-fluid">
          <Link to="/Home">
            <div className="navbar-brand" ><img src={Logo} alt="logo" style={{ width: '10%' }} />  GROWER</div>
          </Link>
        </div>
      </nav>
    );
  }
}