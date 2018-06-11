import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/sessions_actions';

const nullUser = Object.freeze({
    currentUser: null,
    errors: []
});


const SessionReducer = (state = nullUser, action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                currentUser: action.user,
                errors: []
            }
        case RECEIVE_ERRORS:
            return {
                currentUser: null,
                errors: action.errors
            }
        default:
            return state;
    }

};

export default SessionReducer