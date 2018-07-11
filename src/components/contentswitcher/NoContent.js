import React from 'react';
import './NoContent.module.css';
import CardContainer from '../CardContainer';

const NoContent = props => {
    return(
        <CardContainer className="no-results">
            <div className="nothing-found">
                <i class="far fa-frown" />
                <h3>There's nothing here!</h3>
                <p>Hit the search button and find some lyrics.</p>
            </div>
        </CardContainer>
    );
}

export default NoContent;