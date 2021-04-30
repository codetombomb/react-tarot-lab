import React, { Component } from 'react';
import Card from '../Components/Card'

class CardContainer extends Component {
    render() {
        return (
            <div className="card-container">
                {this.props.cards.map((card) => {
                    return (<Card
                        flipped={this.props.flipped}
                        key={card.name_short}
                        info={card}
                        setSelected={this.props.setSelected}
                    />)
                })}
            </div>
        )
    }
}
export default CardContainer;