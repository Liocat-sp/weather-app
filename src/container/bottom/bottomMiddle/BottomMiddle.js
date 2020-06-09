import React, { Component } from 'react';
import OtherState from '../../../components/otherState/otherState';
import './BottomMiddle.css';
import { connect } from 'react-redux';
import * as weatheraction from '../../../store/index';

class BottomMiddle extends Component {
    componentDidMount () {
        this.props.oncity1();
        this.props.oncity2();
        this.props.oncity3();
    }
    render () {
        return (
            <div className="bottom_mid">
                <h2>Other cities</h2>
                <OtherState city="New york" country="United States" icon={this.props.incity1.icon} temp={this.props.incity1.temp} weather={this.props.incity1.weather} humidity={this.props.incity1.humid} wind={this.props.incity1.windspeed}/>
                <OtherState city="London" country="United States" icon={this.props.incity2.icon} temp={this.props.incity2.temp} weather={this.props.incity2.weather} humidity={this.props.incity2.humid} wind={this.props.incity2.windspeed}/>
                <OtherState city="California" country="United States" icon={this.props.incity3.icon} temp={this.props.incity3.temp} weather={this.props.incity3.weather} humidity={this.props.incity3.humid} wind={this.props.incity3.windspeed}/>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        incity1: state.city1,
        incity2: state.city2,
        incity3: state.city3
    }
}
const mapDispatchToProps = dispatch => {
    return {
        oncity1: (city) => dispatch(weatheraction.getdatacity1()),
        oncity2: (city) => dispatch(weatheraction.getdatacity2()),
        oncity3: (city) => dispatch(weatheraction.getdatacity3())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomMiddle);