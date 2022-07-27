import store from "../store";
import types from "../types";
const { dispatch } = store;


export const loginData = (data) => {
    // console.log(data, "login data from actions")
    dispatch({
        type: types.LOGIN,
        payload: data

    })
}

export const logout = () => {
    dispatch({
        type: types.LOGOUT,

    })
}

export const Intro = data => {

    dispatch({
        type: types.INTRO,
        payload: data,
    })
}