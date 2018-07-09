import React from 'react';
import CardContainer from '../CardContainer';
import './Search.module.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artistQuery: '',
            nameQuery: '',
            lyricQuery: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputUpdate(type, term) {
        console.log('Input updated!');
        this.setState({[type]: term});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getLyrics(this.state);
    }

    render() {
        return(
            <CardContainer className="Search">
                Enter some text in some all or of the inputs and go for gold!
                <form onSubmit={this.handleSubmit} className="search-form">
                    <div className="search-artist search-input">
                        <input value={this.state.artistQuery} onChange={(e) => this.handleInputUpdate('artistQuery', e.target.value) } placeholder="Artist Name" id="artist"/>
                    </div>
                    <div className="search-song search-input">
                        <input value={this.state.nameQuery} onChange={(e) => this.handleInputUpdate('nameQuery', e.target.value) } placeholder="Song Name" id="song"/>
                    </div>
                    <div className="search-lyrics search-input">
                        <input value={this.state.lyricQuery} onChange={(e) => this.handleInputUpdate('lyricQuery', e.target.value) } placeholder="Partial lyrics" id="lyrics"/>
                    </div>
                    <button type="submit" on>Find Lyrics!</button>
                </form>
            </CardContainer>
        );
    }
}

export default Search;