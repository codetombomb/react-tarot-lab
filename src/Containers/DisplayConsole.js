import React, { Component } from 'react';
import DisplayCard from '../Components/DisplayCard'

class DisplayConsole extends Component {
    render() {
        return (
            <div className="display-console-wrapper">
                {this.props.selectedCard.name ? 
                <DisplayCard cardInfo={this.props.selectedCard} /> :
                null
                }
                Hello from DisplayConsole
            </div>
        )
    }
}
export default DisplayConsole;