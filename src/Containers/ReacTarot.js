import React, { Component } from 'react';
import Table from '../Components/Table'
import CardContainer from './CardContainer';
import DisplayConsole from './DisplayConsole';

class ReacTarot extends Component {
    constructor() {
        super()
        this.state = {
            deck: [],
            // presentedCards: [],
            threeChosenCards: [],
            selectedCard: {}
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/cards")
            .then(resp => resp.json())
            .then(data => this.setState({
                deck: [...data]
            }))
    }

    setSelected = (e, cardInfo) => {
        let newSelectedCards = this.state.threeChosenCards;

        if (this.state.threeChosenCards.length < 3) {
            newSelectedCards.push(cardInfo)
        }

        e.target.style.visibility = 'hidden';
        this.setState({
            selectedCard: { ...cardInfo }
        })
    }

    render() {
        return (
            <div className="ReacTarot">
                <DisplayConsole selectedCard={this.state.selectedCard}/>
                <Table />
                <CardContainer setSelected={this.setSelected} cards={this.state.deck} />
            </div>
        )
    }
}
export default ReacTarot;