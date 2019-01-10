import React from 'react';

import '../index.css';

export default function Header(props) {
    return (
        <section id="banner">
            <h1 id="title"><strong>Concert</strong><sp id="finder"><strong>Finder</strong></sp></h1>
            <button type="submit" id='loginButton'>Login</button>
            <p class="welcomeName">Welcome, !</p>
        </section>
    );
}
