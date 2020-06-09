import React, { Component } from 'react';
import './otherState.css';
class OtherState extends Component {
    render() {
        return (
            <div className="other">
                <div className="other_top">
                    <div className= "other_icon"><img src={this.props.icon} className="image" alt="icon"></img></div>
                    <div className="other_temp">{this.props.temp}<sup>oC</sup></div>
                    <div className="other_city">
                        <h3>{this.props.city}</h3>
                        <p>{this.props.country}</p></div>
                </div>
                <div className="other_bottom">
                    <div className="sid">{this.props.weather}</div>
                    <div className="sid">Humidity {this.props.humidity}</div>
                    <div>{this.props.wind} km/h</div>
                </div>
            </div>
        );
    }
}

export default OtherState;
