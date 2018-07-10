import React, { Component} from 'react';
import Axios from 'axios';

import Search from './contentswitcher/Search.js';
import SearchResults from './contentswitcher/SearchResults.js';
import Lyrics from './contentswitcher/Lyrics.js';
import Credits from './contentswitcher/Credits.js';
import Recent from './contentswitcher/Recent.js';
import AppBar from './contentswitcher/AppBar.js';

class ContentSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'search',
            activeArtist: '',
            activeSong: '',
            activeLyrics: '',
            searchResults: []
        };
    }

    getLyrics(queryObj) {
        console.log('queryObj :', queryObj);
        // const API_KEY = '98ce6f6186ff364dbeab9b47c26621c4';
        // const apiAddress = `http://api.musixmatch.com/ws/1.1/track.search?q_artist=${queryObj.artist}&q_track=${queryObj.track}&q_lyrics=${queryObj.lyrics}&page_size=3&page=1&s_track_rating=des`;

        const apiAddress = `https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/track.search?page=1&page_size=10&q_artist=${queryObj.artistQuery}&q_track=${queryObj.nameQuery}&q_lyrics=${queryObj.lyricQuery}`;

        const requestConfig = {
            method: 'get',
            headers: {
                'X-Mashape-Key': 'UVhQEbOiH0msh7mSwD7u0LOK8BFMp11CpYZjsn6Kcfgn9M5Pgo',
                'Accept': 'application/json'
            }
        };

        Axios.get(apiAddress, requestConfig)
            .then(res => {
                console.log('Received response from API: ', res);
                this.setState({searchResults: res.data, mode: 'searchresults'});
        });

    }

    getTrack(trackData) {
        console.log('getTrack() called');
        console.log('trackData :', trackData);

        this.setState({
            activeArtist: trackData.artist_name,
            activeSong: trackData.track_name
        });

        const apiAddress = `https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/track.lyrics.get?track_id=${trackData.track_id}`;

        const requestConfig = {
            method: 'get',
            headers: {
                'X-Mashape-Key': 'UVhQEbOiH0msh7mSwD7u0LOK8BFMp11CpYZjsn6Kcfgn9M5Pgo',
                'Accept': 'application/json'
            }
        };

        Axios.get(apiAddress, requestConfig)
            .then(res => {
                console.log('Received response from API: ', res);
                this.setState({ mode: 'lyrics', activeLyrics: res.data.lyrics_body.replace('↵', '\n') });
            });
    }

    switchMode(mode) {
        this.setState({mode});
    }

    switchContent() {
        const modeLookup = {
            search: <Search getLyrics={(queryObj) => this.getLyrics(queryObj)}/>,
            searchresults: <SearchResults data={this.state.searchResults} handleSelect={(data) => this.getTrack(data)}/>,
            lyrics: <Lyrics artist={this.state.activeArtist} song={this.state.activeSong} lyrics={this.state.activeLyrics} />,
            credits: <Credits />,
            recent: <Recent />
        };
        return modeLookup[this.state.mode];
    }

    render() {
        return(
            <div className="ContentSwitcher">
                {this.switchContent()}
            <AppBar modeSelector={(m) => this.switchMode(m)} />
            </div>
        );
    }
}

export default ContentSwitcher;