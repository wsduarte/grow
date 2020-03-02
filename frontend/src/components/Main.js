import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pagina from "./Pagina-1/Pagina";
import Navbar from "./Navbar";
import Pagina2 from "./Pagina-2/Pagina2";
export default class Main extends React.Component {

  /**
   * Render del modulo. Establece que ruta direcciona a que modulo. Dinamicamente/estaticamente.
   */
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Pagina} />
            <Route exact path="/Home" component={Pagina} />
            <Route exact path="/search/:departamento" component={Pagina2} />
            <Route exact path="/search/:temperatura/:precipitacion/:elevacionMin/:elevacionMax" component={Pagina2} />
          </Switch>
        </div>
      </Router>

    );
  }
}