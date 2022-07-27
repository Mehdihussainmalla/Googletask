import { removeData, setLogin} from "../../utils/utils";
import types from "../types";

const initialState = {
    userData: {},
    count: 0,
    list: [],
}
export const userStatus = (state = initialState, action) => {

    switch (action.type) {
        case types.LOGIN:
            {
                const data = action.payload;
                //  console.log(data, "data on action login")
                 setLogin(data)
                return {userData: data}                
            }
            case types.LOGOUT:
                removeData("userData").then((res) => {
                    // console.log(res, "res from reducer>>")
                    return { ...state.userData, userData: res }
                })
                return { ...state.userData, userData: undefined }

        default:
            return { ...state }
    }
}