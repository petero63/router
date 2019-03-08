import React, { Component } from 'react';
import car from './../car.jpg'; 
import './Picture.css';

class Picture extends Component {
    state = {
        radius: 30
    }

	changeRadiusI = ()=> { 
        this.setState({radius: this.state.radius + 5});
	}
	changeRadiusD = ()=> { 
        this.setState({radius: this.state.radius - 5});
	}
    render () {
		 var radius = this.state.radius + '%';
        return (
            <div className="Picture">
			  <h1>Ferrari</h1>
			  <img src={car} alt="Ferrati" style={{borderRadius: radius, padding: 10}} />

            <div>
				<button type="button" className="btn btn-primary" onClick={this.changeRadiusI}>+</button>
			  &nbsp;
				<button type="button" className="btn btn-primary" onClick={this.changeRadiusD}>-</button>
            </div>
            </div>
        );
    }
}

export default Picture;

