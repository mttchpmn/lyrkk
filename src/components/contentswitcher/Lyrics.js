import React from 'react';
import CardContainer from '../CardContainer';

const Lyrics = ({artist, song, lyrics}) => {
    return(
        <CardContainer className="Lyrics">
            <h2>{song}</h2>
            <h3>{artist}</h3>
            <p>{lyrics}</p>
        </CardContainer>
    );
}

export default Lyrics;