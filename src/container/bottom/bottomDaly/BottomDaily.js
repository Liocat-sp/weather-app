import React, { Component } from 'react';
import Daily from '../../../components/Daily/Daily';
import './BottomDaily.css'
import { connect } from 'react-redux';

class BottomDaily extends Component {
    state = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'                                                       
    }                                             
    render() {
        const date = new Date();
        let x = date.getDay();
        let arrayday = [x+1,x+2,x+3,x+4];
        arrayday = arrayday.map(curr => {
            if(curr>6) 
            return curr-6;
            else
            return curr;
        });
        return (
            <div className="Bottom_widged">
                <h2 className= "Bottom_title1"> 4 Day <span>Forecast</span></h2>
                <div className="Bottom_content">
                    <Daily weekDay={this.state[arrayday[0]] } 
                    weather={this.props.inday2.weather} 
                    maxTemp={this.props.inday2.tempMax} 
                    minTemp={this.props.inday2.tempMin}
                    icon={this.props.inday2.icon}/>
                    <Daily weekDay={this.state[arrayday[1]]} 
                    weather={this.props.inday3.weather} 
                    maxTemp={this.props.inday3.tempMax} 
                    minTemp={this.props.inday3.tempMin}
                    icon={this.props.inday3.icon}/>
                    <Daily weekDay={this.state[arrayday[2]]} 
                    weather={this.props.inday4.weather} 
                    maxTemp={this.props.inday4.tempMax} 
                    minTemp={this.props.inday4.tempMax}
                    icon={this.props.inday4.icon}/>
                    <Daily weekDay={this.state[arrayday[3]]}
                    weather={this.props.inday5.weather} 
                    maxTemp={this.props.inday5.tempMax} 
                    minTemp={this.props.inday5.tempMax}
                    icon={this.props.inday5.icon}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        inday2 : state.day2,
        inday3 : state.day3,
        inday4 : state.day4,
        inday5 : state.day5
    };
}
export default connect(mapStateToProps)(BottomDaily);