import React from 'react';
import CardContainer from '../CardContainer';
import Spinner from './spinner.gif';
import './LoadScreen.module.css';

const LoadScreen = props => {
    return(
        <CardContainer className="LoadScreen">
            <div className="loading-spinner">
                <img src={Spinner} alt="Loading Spinner" />
            </div>
        </CardContainer>
    );
}

export default LoadScreen;