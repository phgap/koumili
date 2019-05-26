const axios = require('axios')
import * as api from "../../api"
export const REQUEST_SLIDES = "REQUEST_SLIDES";
export const RECEIVE_SLIDES = "RECEIVE_SLIDES";

export function requestSlides() {
    return {
        type: REQUEST_SLIDES
    }
}

export function receiveSlides(resp) {
    return {
        type: RECEIVE_SLIDES,
        slides: resp.slides
    }
}

export function fetchSlides() {
    return dispatch => {
        dispatch(requestSlides())
        return axios.get(`${api.API_SLIDES}`)
            .then(resp => dispatch(receiveSlides(resp.data)))
    };
}