import {
    SET_TABBAR_VISIABILITY
} from "../_actions"

const initState = {
    tabBarVisibility: true
}

export function ui(state = initState, action) {
    switch (action.type) {
        case SET_TABBAR_VISIABILITY:
            return Object.assign({}, state, {
                tabBarVisibility: action.visiable
            })
        default:
            return state
    }
}