import React from 'react';
import CardContainer from '../CardContainer';
import SongContainer from './SongContainer';
import './SearchResults.module.css';

const SearchResults = ({data, handleSelect}) => {
    if (!data.length) {
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