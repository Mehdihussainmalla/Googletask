import { combineReducers } from "redux";
import types from "../types";
import { userStatus } from "./auth";
import intro from "./intro";

const appReducer = combineReducers({
    userStatus,
    intro
    })
    const rootReducer = (state, action) => {
        if (action.type == types.CLEAR_REDUX_STATE) {
            state = undefined
        }
        return appReducer(state, action)
    }
    export default rootReducer;