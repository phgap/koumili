const axios = require('axios')
import * as api from '../../api';

export function login(username, password) {
    return axios.post(`http://localhost:10010${api.API_LOGIN}`, {
        username,
        password
    }).then(resp => {
        if (resp.data.result) {
            return resp.data.token
        } else {
            logout()
            return Promise.reject()
        }
        return resp.data
    }).then(data => {
        localStorage.setItem('auth_token', data)
        return data
    })
}

export function logout() {
    localStorage.removeItem('auto_token')
}

