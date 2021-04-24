import React, { Component } from 'react';
import ForecastCard from '../Components/ForecastCard';

class ForecastContainer extends Component {

    render() {
        const pastPresFut = ["past", "present", "future"]
        return (
            <div className="forecast-container">
                {this.props.cards.map((card,index) => {
                    return <ForecastCard 
                    time={pastPresFut[index]} 
                    cardName={card.name} 
                    imageSrc={card.name_short}
                    />
                })}
            </div>
        )
    }
}

export default ForecastContainer;