import {
    REQUEST_LOGIN,
    RECEIVE_LOGIN,
    REQUEST_LOGOUT,
    RECEIVE_LOGOUT,
} from "../_actions"
const initState = {
    isAuth: false,
    token: "",
    loggingIn: false
}
export function users(state = initState, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                loggingIn: true
            });
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                isAuth: true,
                token: action.token,
                loggingIn: false
            });
        case REQUEST_LOGOUT:
        case RECEIVE_LOGOUT:
            return initState;
        default:
            return state;
    }
}