import React, { Component } from 'react';
import Table from '../Components/Table'
import CardContainer from './CardContainer';
import DisplayConsole from './DisplayConsole';

class ReacTarot extends Component {
    constructor() {
        super()
        this.state = {
            deck: [],
            presentedCards: [],
            threeChosenCards: [],
            selectedCard: {}
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/cards")
            .then(resp => resp.json())
            .then(data => this.setState({
                deck: [...data],
                presentedCards: [...data]
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

    sortCards = (selection) => {
        let newPresentedCards = [];
        switch (selection) {
            case "":
                newPresentedCards = this.state.deck;
                break;
            case "value":
                newPresentedCards = this.state.presentedCards.sort((card1, card2) => card1.value > card2.value ? 1 : -1)
                break;
            case "name":
                newPresentedCards = this.state.presentedCards.sort((card1, card2) => card1.name > card2.name ? 1 : -1)
                break;
            case "type":
                newPresentedCards = this.state.presentedCards.sort((card1, card2) => card1.type > card2.type ? 1 : -1)
                break;
            default:
                break;
        }
        this.setState({
            presentedCards: newPresentedCards
        })


    }

    filterCards = (filter) => {
        let filteredCards = [];
        switch (filter) {
            case "all":
                filteredCards = this.state.deck;
                break;
            case "major":
                filteredCards = this.state.deck.filter(card => card.type === 'major');
                break;
            case "minor":
                filteredCards = this.state.deck.filter(card => card.type === 'minor');
                break;
            case "wands":
                filteredCards = this.state.deck.filter(card => card.suit === 'wands');
                break;
            case "cups":
                filteredCards = this.state.deck.filter(card => card.suit === 'cups');
                break;
            case "pentacles":
                filteredCards = this.state.deck.filter(card => card.suit === 'pentacles');
                break;
            case "swords":
                filteredCards = this.state.deck.filter(card => card.suit === 'swords');
                break;
            default:
                break;
        }
        this.setState({
            presentedCards: [...filteredCards]
        })

    }

    shuffleCards = () => {
        console.log("Shuffleing cards")
    }

    render() {
        return (
            <div className="ReacTarot">
                <DisplayConsole
                    selectedCard={this.state.selectedCard}
                    shuffle={this.shuffleCards}
                    sort={this.sortCards}
                    filter={this.filterCards}
                />
                <Table />
                <CardContainer setSelected={this.setSelected} cards={this.state.presentedCards} />
            </div>
        )
    }
}
export default ReacTarot;