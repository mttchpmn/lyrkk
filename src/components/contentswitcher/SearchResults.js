import React from 'react';
import CardContainer from '../CardContainer';
import SongContainer from './SongContainer';
import './SearchResults.module.css';

const SearchResults = ({data}) => {
    return(
        <CardContainer className="SearchResults">
            <h2>Search Results</h2>
            {data.map(item => {
                return (
                <SongContainer data={item} />
                );
            })}
        </CardContainer>
    );
}

export default SearchResults;