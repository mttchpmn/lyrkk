import React, { Component} from 'react';

import Search from './contentswitcher/Search.js';
import Lyrics from './contentswitcher/Lyrics.js';
import Credits from './contentswitcher/Credits.js';
import Recent from './contentswitcher/Recent.js';

class ContentSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'search'
        };
    }

    switchContent() {
        const modeLookup = {
            search: <Search />,
            lyrics: <Lyrics />,
            credits: <Credits />,
            recent: <Recent />
        };
        return modeLookup[this.state.mode];
    }

    render() {
        return(
            <div className="ContentSwitcher">
                {this.switchContent()}
            </div>
        );
    }
}

export default ContentSwitcher;