import React from 'react';
import { connect } from 'react-redux';

import { makeGuess } from '../actions';

//CALEB change guesses to Login and make statFULL

export class LoginForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        const loginEmail = this.input.loginEmail;
        const loginPassword = this.input.loginPassword;
        this.props.dispatch(makeGuess(loginEmail, loginPassword));
    }

    render() {
        return (
            <div class="page" id="loginPage">
                <form onSubmit={e => this.onSubmit(e)} className="loginForm"
                    <legend>Login</legend>
                    <fieldset>
                        <label for="loginEmail">Email</label><br>
                        <input name="userEmail"> type="email" id="loginEmail" placeholder="you123@gmail.com" ref={loginEmail => (this.loginEmail = loginEmail)} required>
                        <br>
                        <label for="loginPassword">Password</label><br>
                        <input type="password" id="loginPassword" placeholder="Mypassword1" ref={loginPassword => (this.loginPassword = loginPassword)} required>
                    </fieldset>
                    <button type="submit" class="submit-button" id="signInButton">Sign In</button>
                </form>
            </div>
        );
    }
}

export default connect ()(LoginForm);
