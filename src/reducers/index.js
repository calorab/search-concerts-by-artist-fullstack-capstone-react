import {ARTIST_SEARCH_FORM, LOGIN_FORM, SIGNUP_FORM} from '../actions';

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
        // CALEB MARIUS on input if artist success notification + add to list : message(err)
//        if (artistsSearch in res) {
//            //MARIUS how to add artist to artist list
//            alert('Your are now following this artist');
//        } else {
//            alert('We could not find that artist')
//        }
        //CALEB varify below
        return Object.assign({}, state, {artists});
    }

    return state;
};
