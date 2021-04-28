import React, { Component } from 'react';

class Card extends Component {
    constructor(){
        super()
        this.state = {
            cardInfo: {}
        }
    }

    componentDidMount(){
        let cardInfo = this.props.info;
        this.setState({
            cardInfo: {...cardInfo}
        })
    }

    render() {
        return(
            <div className="card-wrapper">
                <div className="card" onClick={() => {
                    this.props.setSelected(this.state.cardInfo)
                }}>
                </div>
            </div>
        )
    }
}
export default Card;