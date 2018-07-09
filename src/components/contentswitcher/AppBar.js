import React from 'react';
import './AppBar.module.css';

const AppBar = props => {
    return(
        <div className="AppBar">
            <div className="recent">Recent</div>
            <div className="search">Search</div>
            <div className="info">Info</div>
        </div>
    );
}

export default AppBar;