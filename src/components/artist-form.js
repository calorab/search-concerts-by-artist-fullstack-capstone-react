import React from 'react';
import { connect } from 'react-redux';
//CALEB
import { artistSearchForm } from '../actions';

import './guess-form.css';

//CALEB change Guess to Artist and make statFULL
export class ArtistForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        const artistSearch = this.input.artistSearch;

        this.props.dispatch(artistSearchForm(artistSearch));
    }

    componentDidMount() {
        this.loadGetArtistsFromSongkick();
    }

    loadGetArtistsFromSongkick() {
        this.setState({
            error: null,
            loading: true
        });

        return fetch("https://api.songkick.com/api/3.0/search/artists.json?apikey=ZOV7FltnOvfdD7o9&query=" + artistSearch)
            .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
            console.log(res.json);
            })
            .then(GetArtistsFromSongkick =>
                this.setState({
                    artists: GetArtistsFromSongkick.artists,
                    loading: false
                })
            )
            .catch(err =>
                this.setState({
                    error: 'Could not load artists',
                    loading: false
                })
            );
    }

    render() {
        return (
            <div class="page" id="artistDashboard">
                <header>
                    <h1>Your Dashboard</h1>
                    <p id="howItWorks">Here's how it works: Search for an artist below to start following them. Artists that you follow are listed below. Click on the artists you're follwing to see their upcoming concerts</p>
                </header>
                <form onSubmit={e => this.onSubmit(e)} id="artistSearchForm">
                    <fieldset>
                        <label for="artistSearch">Enter an artists here...</label>
// CALEB on input if artist success notification + add to list : message(err)
                        <input type="text" id="artistSearch" name="artistSearch"
                        ref={artistSearch => (this.artistSearch = artistSearch)} required>
                    </fieldset>
                    <button type="submit" name="submit" className="submit-button" id="searchButton">Add Artist</button>
                </form>
            </div>
        );
    }
}

export default connect ()(ArtistForm);
