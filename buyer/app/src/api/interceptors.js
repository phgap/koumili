const axios = require('axios')

axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem('auth_token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (error.response.status === 401) {
        location.assign('/login')
    }

    return Promise.reject(error)
})