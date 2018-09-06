import {SHOW_MENU} from "../constants";

const initialState = {
    flag: false
};
export default (state = initialState, action) => {
    switch (action.type){
        case SHOW_MENU: {
            console.log("REDUCER", action.payload);
            return {
                flag: !action.payload
            }
        }
    }
    return state

}