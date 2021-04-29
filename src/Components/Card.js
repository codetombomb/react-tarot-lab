import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
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
        let backgroundImage = this.props.flipped ? 
        `process.env.PUBLIC_URL../../cardImages/${this.state.cardInfo.name_short}.jpg` : 
        "https://media.istockphoto.com/illustrations/back-cover-design-of-tarot-card-gothic-pattern-on-old-paper-texture-illustration-id1046396972";
        console.log(backgroundImage)
        return(
            <div className="card-wrapper">
                <img 
                src={backgroundImage}
                className="card" 
                onClick={() => {
                    this.props.setSelected(this.state.cardInfo)
                }}
                alt={this.state.cardInfo.name_short}
                >
                </img>
            </div>
        )
    }
}
export default Card;