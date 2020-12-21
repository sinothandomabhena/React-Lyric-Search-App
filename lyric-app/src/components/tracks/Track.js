import React from 'react'
import { Link }  from 'react-router-dom'

const Track = (props) => {
    const {track} = props

    return (
        <div className="col-md-6">
            <div id="track-card" className="card mb-3 shadow-sm">
                <div className="card-body text-center">
                    <h5 className="text-center font-weight-bold h3 mb-4">{track.artist_name}</h5>
                    <p className="card-text">
                        <strong>Track</strong> - {track.track_name}
                        <br />
                        <strong>Album</strong> - {track.album_name}
                    </p>
                    <Link to={`lyrics/tracks/${track.track_id}`} id="lyric-button" className="btn btn-dark font-weight-bold h2">
                        View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Track
