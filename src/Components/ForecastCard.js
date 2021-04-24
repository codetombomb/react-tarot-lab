import React, { Component } from 'react';

class ForecastCard extends Component {

    render() {
        return(
            <div className="forecast-card-wrapper">
                <h1>{this.props.time}</h1>
                <div className="forecast-card" >
                    <img className="forecast-card-img" src={process.env.PUBLIC_URL + `./cardImages/${this.props.imageSrc}.jpg`}></img>
                    <h3>- {this.props.cardName} -</h3>
                </div>
            </div>
        )
    }
}
export default ForecastCard;