import React from 'react';

function Buttons(props) {
    return (
        <div className="buttons-wrapper">
            <button className="shuffle-button" onClick={props.shuffle}>Shuffle</button>
            <button className="flip-button" onClick={props.flip}>Flip All</button>
        </div>
    );
}

export default Buttons;