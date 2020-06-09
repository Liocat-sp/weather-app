import React, { Component } from 'react';
import './mainIcon.css';

class Icon extends Component {
    render () {

        return(
            <div className="box1">
                <div className="icon"><img src={this.props.icon} className="img2" alt="icon"></img></div>
                <p className="Text">{this.props.weather}</p>
            </div>
        );
    }
}

export default Icon; 