import React from 'react';
import { connect } from 'react-redux';

export function ConcertList(props) {
    // CALEB change guesses to Concerts and map over api response
    const concerts = props.concerts.map((concert, index) => (
        <li key={index}>
        {concert}
        </li>
    ));

    return (
        <div className="page" id="concertList">
            <header>
                <h1>{artist}'s Concerts...</h1>
            </header>
            <div>
                <ul id="concertItems">
                {concerts}
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    concerts: state.concerts
});

export default connect(mapStateToProps)(ConcertList);
