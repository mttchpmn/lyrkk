import React from 'react';
import './AppBar.module.css';

const AppBar = ({modeSelector}) => {
    return(
        <div className="AppBar">
            <div onClick={() => modeSelector('searchresults')} className="recent nav-button"><i className="fas fa-list" /></div>
            <div onClick={() => modeSelector('search')} className="search nav-button"><i className="fas fa-search" /></div>
            <div onClick={() => modeSelector('info')} className="info nav-button"><i className="fas fa-info" /></div>
        </div>
    );
}

export default AppBar;