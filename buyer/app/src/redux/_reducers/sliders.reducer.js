import {
    REQUEST_SLIDES,
    RECEIVE_SLIDES
} from '../_actions'

const initState = {
    isFetching: false,
    slides: []
}
export function slides(state = initState, action) {
    switch (action.type) {
        case REQUEST_SLIDES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_SLIDES:
            return Object.assign({}, state, {
                isFetching: false,
                slides: action.slides
            })
        default:
            return state;
    }
}