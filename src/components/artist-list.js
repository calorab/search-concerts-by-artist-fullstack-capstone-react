import React from 'react';
import { connect } from 'react-redux';

export function ArtistList(props) {
    // CALEB change guesses to artists and map over the api response
    const artists = props.artists.map((artist, index) => (
        <li key={index}>
        {artist}
        </li>
    ));

    return (
        <div id="artistList">
            <h2>Your Artists</h2>
            <p id="manageArtists">Click on the 'X' next to the Artist's name to see concerts or remove them from your list...</p>
            <ul>
            {artists}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    artists: state.artists
});

export default connect(mapStateToProps)(GuessList);
