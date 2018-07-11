import React, { Component} from 'react';
import Axios from 'axios';

import Search from './contentswitcher/Search.js';
import SearchResults from './contentswitcher/SearchResults.js';
import Lyrics from './contentswitcher/Lyrics.js';
import Credits from './contentswitcher/Credits.js';
import Recent from './contentswitcher/Recent.js';
import AppBar from './contentswitcher/AppBar.js';
import LoadScreen from './contentswitcher/LoadScreen.js';

class ContentSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'search',
            activeArtist: null,
            activeSong: null,
            activeLyrics: null,
            copyright: null,
            searchResults: []
        };
    }

    getLyrics(queryObj) {
        console.log('queryObj :', queryObj);
        this.setState({mode: 'loading'});

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
            mode: 'loading',
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
                this.setState({ 
                    mode: 'lyrics', 
                    activeLyrics: res.data.lyrics_body,
                    copyright: res.data.lyrics_copyright
                 });
            });
    }

    switchMode(mode) {
        this.setState({mode});
    }

    switchContent() {
        const modeLookup = {
            search: <Search getLyrics={(queryObj) => this.getLyrics(queryObj)}/>,
            searchresults: <SearchResults data={this.state.searchResults} handleSelect={(data) => this.getTrack(data)}/>,
            lyrics: <Lyrics artist={this.state.activeArtist} song={this.state.activeSong} lyrics={this.state.activeLyrics} copyright={this.state.copyright}/>,
            credits: <Credits />,
            recent: <Recent />,
            loading: <LoadScreen />
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