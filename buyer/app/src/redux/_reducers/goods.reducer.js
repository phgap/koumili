import {
    REQUEST_GOODS,
    RECEIVE_GOODS
} from "../_actions"

const initState = {
    isFetching: false
}

function items(state = [], action) {
    switch (action.type) {
        case RECEIVE_GOODS:
            return action.items
        default:
            return state
    }
}

export function goods(state = initState, action) {
    switch (action.type) {
        case REQUEST_GOODS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_GOODS:
            return Object.assign({}, state, {
                isFetching: false,
                [action.category]: items(state[action.category], action)
            })
        default:
            return state
    }
}