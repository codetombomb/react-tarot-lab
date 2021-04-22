import React, { Component } from 'react';
import Table from '../Components/Table'

class ReacTarot extends Component {
    constructor(){
        super()
        this.state = {
            deck: [],
            presentedCards: [],
            chosenCards: [],
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

    render() {
        return(
            <div className="ReacTarot">
                <Table />
            </div>
        )
    }
}
export default ReacTarot;