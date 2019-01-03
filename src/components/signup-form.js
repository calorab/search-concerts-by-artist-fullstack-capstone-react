import React from 'react';
import { connect } from 'react-redux';

import { makeGuess } from '../actions';

import './guess-form.css';

export class GuessForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        const value = this.input.value;
        this.props.dispatch(makeGuess(value));
        this.input.value = '';
        this.input.focus();
    }

    render() {
        return (
            <div class="page" id="signupPage">
                <form  onSubmit={e => this.onSubmit(e)} class="createAccountForm">
                    <legend>Create your account to discover concerts near you</legend>
                    <fieldset>
                        <label for="createEmail">Email</label><br>
                        <input type="email" id="createEmail" placeholder="you123@gmail.com" name="userEmail"
                        ref={input => (this.input = input)} required><br>
                        <label for="createPassword">Password</label><br>
                        <input type="password" id="createPassword" placeholder="Mypassword1" name="userEmail"
                        ref={input => (this.input = input)} required><br>
                        <label for="createUserName">What should we call you?</label><br>
                        <input type="string" id="createUserName" placeholder="reactGenius123" name="userName"
                        ref={input => (this.input = input)}
                        required>
                    </fieldset>
                    <button type="submit" class="submit-button" id="createAccountButton">Create Account!</button>
                </form>
            </div>
        );
    }
}

export default connect ()(GuessForm);
