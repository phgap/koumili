const Mock = require('mockjs')
import * as api from '../api'
const Random = Mock.Random

let homeIndexGoods = []
let homeIndexGoodsId = 1;
for (let i = 0; i < 20; i++) {
    homeIndexGoods.push({
        'id': homeIndexGoodsId++,
        'img': Random.image('165x220', Random.color(), 'Hello'),
        'name': Random.last(),
        'price': ''+ Random.natural(100, 2000)
    })
}

// Mock.mock(api.API_GOODS_HOME_INDEX, 'get', {
//     data: homeIndexGoods
// })


const auth = {
    isAuthenticated: false,
    token: null,
    id: null,
    authenticate(token) {
        if (!token) {
            return false;
        }

        if (this.token === token) {
            return true
        } else {
            return false
        }
    },
    signout() {
        this.isAuthenticated = false;
        this.token = null;
    },
    login() {
        this.isAuthenticated = true;
        this.token = ('' + Math.random()).slice(2);
    },
    updateToken() {
        this.id = setInterval(() => {
            this.token = ('' + Math.random()).slice(2)
        }, 1000 * 60)
    }
};

// Mock.mock(api.API_LOGIN, 'post', function () {
//     auth.login()
//     return {
//         result: true,
//         token: auth.token
//     }
// })

Mock.mock(api.API_LOGOUT, 'post', (opts) => {
    auth.signout()
    return {
        result: true
    }
})

Mock.mock(api.API_AUTH, 'post', (opts) => {
    let { authenticate:token } = JSON.parse(opts.body)
    return {
        isAuthenticated: auth.authenticate(token)
    }
})

let slides = []
for (let i = 0; i < 6; i++) {
    slides.push({
        'src': Random.image('375x200', Random.color(), `${i+1}`)
    })
}

Mock.mock(api.API_SLIDES, 'get', {
    slides: slides
})