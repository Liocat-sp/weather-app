import React, { Component } from 'react';
import './Daily.css';
class Daily extends Component {
    render() {
        return (
            <div className="widged">
                <div className="widged_icon"><img className="icondaily" src={this.props.icon} alt="icon"></img></div>
                <div className="widged_title">
                    <h5>{this.props.weekDay}</h5>
                    <p>{this.props.weather}</p>
                </div>
                <div className="widged_temp">
                    <p>{this.props.maxTemp}<sup>o</sup>/{this.props.minTemp}<sup>o</sup></p>
                </div>
            </div>
        );
    }
}

export default Daily;