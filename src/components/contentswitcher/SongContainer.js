import React from 'react';
import './SongContainer.module.css';

const SongContainer = ({data}) => {
    return(
        <div className="SongContainer">
            <img src={data.album_coverart_100x100} alt="Album Art" />
            <div className="song-details">
                <h4 className="track-name">{data.track_name}</h4>
                <p className="track-details"><i class="fas fa-user"/>{data.artist_name}</p>
                <p className="track-details"><i class="fas fa-compact-disc" />{data.album_name}</p>
            </div>
        </div>
    );
}

export default SongContainer;