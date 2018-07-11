import React from 'react';
import CardContainer from '../CardContainer';
import SongContainer from './SongContainer';
import NoContent from './NoContent';
import './SearchResults.module.css';

const SearchResults = ({data, handleSelect}) => {
    if (!data.length) {
        return(
            <NoContent />
        );
    }
    return(
        <CardContainer scrollable={true} className="SearchResults">
            <h2>Search Results</h2>
            {data.map(item => {
                return (
                <SongContainer data={item} handleSelect={(data) => handleSelect(data)} />
                );
            })}
        </CardContainer>
    );
}

export default SearchResults;