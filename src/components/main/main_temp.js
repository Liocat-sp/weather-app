import React, { Component } from 'react';
import './main_temp.css';

class Temp extends Component {
    render () {
        return(
            <div className="box">
                <div className="temp">{this.props.temp}</div>
                <div className="deg">o</div>
                <div className="cel">C</div>
            </div>
        );
    }
}

export default Temp; 