import React from 'react';

function ShuffleButton(props) {
    return (
        <div className="shuffle-button-wrapper">
            <button className="shuffle-button" onClick={props.shuffle}>Shuffle</button> 
        </div>
    );
}

export default ShuffleButton;