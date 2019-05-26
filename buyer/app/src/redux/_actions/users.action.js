import { login as loginService } from "../_helpers"

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';

export function requestLogin(username, password) {
    return {
        type: REQUEST_LOGIN,
        username,
        password
    }
}

export function receiveLogin(token) {
    return {
        type: RECEIVE_LOGIN,
        token: token
    }
}

export function login(username, password, history, from) {
    return dispatch => {
        dispatch(requestLogin(username, password))
        return loginService(username, password)
            .then(token => dispatch(receiveLogin(token)))
            .then(() => {
                history.push(from)
            })
    };
}