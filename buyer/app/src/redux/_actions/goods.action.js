const axios = require('axios')
import * as api from "../../api"
export const REQUEST_GOODS = 'REQUEST_GOODS';
export const RECEIVE_GOODS = 'RECEIVE_GOODS';


export function requestGoods(category) {
    return {
        type: REQUEST_GOODS,
        category
    };
}

export function receiveGoods(category, resp) {
    return {
        type: RECEIVE_GOODS,
        category,
        items: resp.data.data
    };
}

export function fetchGoods(category) {
    return dispatch => {
        dispatch(requestGoods(category))
        return axios.get(`http://localhost:10010${api.API_GOODS_BASE}/${category}`)
            .then(resp => dispatch(receiveGoods(category, resp)))
    };
}