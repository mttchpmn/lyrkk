import React from 'react';
import './CardContainer.css';

const CardContainer = ({scrollable, children}) => {
    const scrollClass = scrollable ? 'scrollable' : '';
    return(
        <div className={`CardContainer ${scrollClass}`}>
            {children}
        </div>
    );
}

export default CardContainer;