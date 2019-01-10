export const ARTIST_SEARCH_FORM = 'ARTIST_SEARCH_FORM';
export const artistSearchForm = artistSearch => ({
    type: ARTIST_SEARCH_FORM,
    artistSearch
    });

export const LOGIN_FORM = 'LOGIN_FORM';
export const loginForm = (loginEmail, loginPassword) => ({
    type: LOGIN_FORM,
    loginEmail,
    loginPassword
});

export const SIGNUP_FORM = 'SIGNUP_FORM';
export const signupForm = (createEmail, createPassword, createUserName) => ({
    type: SIGNUP_FORM,
    createEmail,
    createPassword,
    createUserName
});
