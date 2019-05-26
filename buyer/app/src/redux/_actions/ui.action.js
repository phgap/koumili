export const SET_TABBAR_VISIABILITY = "SET_TABBAR_VISIABILITY";


export function setTabBarVisibility(visiable) {
    return {
        type: SET_TABBAR_VISIABILITY,
        visiable
    }
}