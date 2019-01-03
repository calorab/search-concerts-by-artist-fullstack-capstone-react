import {ARTIST_SEARCH_FORM, LOGIN_FORM, SIGNUP_FORM} from './actions';

const initialState = {
    loggedInUserName:'',
    artists: {},
    concerts:{},
};

export default (state = initialState, action) => {

    if (action.type === LOGIN_FORM) {
        return Object.assign({}, state, {
            loggedInUserName:''
        });
    }

    if (action.type === SIGNUP_FORM) {

        return Object.assign({}, state, {
            loggedInUserName: [...state.loggedInUserName]
        });
    }

    if (action.type === ARTIST_SEARCH_FORM) {
        const artists = state;
        // CALEB on input if artist success notification + add to list : message(err)
//        if (guesses.length > 0) {
//            auralStatus += ` ${pluralize
//                ? 'In order of most- to least-recent, they are'
//            : 'It was'}: ${guesses.reverse().join(', ')}`;
//        }
//CALEB varify below
        return Object.assign({}, state, {artistSearch});
    }

    return state;
};
