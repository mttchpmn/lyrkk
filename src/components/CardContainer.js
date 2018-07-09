import React from 'react';
import './CardContainer.css';

const CardContainer = props => {
    return(
        <div className="CardContainer">
            {props.children}
        </div>
    );
}

export default CardContainer;