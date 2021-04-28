import React, { Component } from 'react';
import DisplayCard from '../Components/DisplayCard'
import ShuffleButton from '../Components/ShuffleButton';
import SortFilter from '../Components/SortFilter';

class DisplayConsole extends Component {
    render() {
        return (
            <div className="display-console-wrapper">
                    <DisplayCard cardInfo={this.props.selectedCard} />
                <SortFilter
                    sortCards={this.props.sort}
                    filterCards={this.props.filter}
                />
                <ShuffleButton shuffle={this.props.shuffle} />
            </div>
        )
    }
}
export default DisplayConsole;