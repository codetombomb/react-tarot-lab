import React, { Component } from 'react';
import Table from '../Components/Table'
import CardContainer from './CardContainer';

class ReacTarot extends Component {
    constructor(){
        super()
        this.state = {
            deck: [],
            presentedCards: [],
            chosenCards: [],
            selectedCard: {},
            past: [],
            present: [],
            future: []
        }
    }

componentDidMount(){
    fetch("http://localhost:3001/cards")
    .then(resp => resp.json())
    .then(data => this.setState({
        deck: [...data]
    }))
}

setSelected = (e, cardInfo) => {
    e.target.style.visibility = 'hidden';
    this.setState({
        selectedCard: {...cardInfo}
    })
}

    render() {
        return(
            <div className="ReacTarot">
                <Table />
                <CardContainer setSelected={this.setSelected} cards={this.state.deck}/>
            </div>
        )
    }
}
export default ReacTarot;