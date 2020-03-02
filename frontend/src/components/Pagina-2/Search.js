import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Planta from './Planta';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plantas: this.props.plantas
        }
        }       
    render() { 
        return (
            <div>
                {this.state.plantas.map(t =>(<Planta planta={t} id={t.id}/>))}
            </div>
        );
    }
}
 
export default Search;