import React from 'react';
import CardContainer from '../CardContainer';
import NoContent from './NoContent';
import './Lyrics.module.css';

const Lyrics = ({artist, song, lyrics, copyright}) => {
    if (!lyrics) return (<NoContent />);

    return(
        <CardContainer scrollable={true}>
            <div className="Lyrics">
                <h2>{song}</h2>
                <h3>{artist}</h3>
                <p>{lyrics}</p>
            </div>
            <p className="copyright"><em>{copyright}</em></p>
        </CardContainer>
    );
}

export default Lyrics;