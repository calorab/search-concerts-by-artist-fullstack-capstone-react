import React from 'react';
import { connect } from 'react-redux';

import { makeGuess } from '../actions';

import './guess-form.css';

export class SignupForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        const createEmail = this.input.createEmail;
        const createPassword = this.input.createPassword;
        const createUserName = this.input.createUserName;
        this.props.dispatch(signUp(createEmail, createPassword, createUserName));
    }

    render() {
        return (
            <div class="page" id="signupPage">
                <form  onSubmit={e => this.onSubmit(e)} class="createAccountForm">
                    <legend>Create your account to discover concerts near you</legend>
                    <fieldset>
                        <label for="createEmail">Email</label><br>
                        <input type="email" id="createEmail" placeholder="you123@gmail.com" name="userEmail"
                        ref={createEmail => (this.createEmail = createEmail)} required><br>
                        <label for="createPassword">Password</label><br>
                        <input type="password" id="createPassword" placeholder="Mypassword1" name="userEmail"
                        ref={createPassword => (this.createPassword = createPassword)} required><br>
                        <label for="createUserName">What should we call you?</label><br>
                        <input type="string" id="createUserName" placeholder="reactGenius123" name="userName"
                        ref={createUserName => (this.createUserName = createUserName)}
                        required>
                    </fieldset>
                    <button type="submit" class="submit-button" id="createAccountButton">Create Account!</button>
                </form>
            </div>
        );
    }
}

export default connect ()(SignupForm);
