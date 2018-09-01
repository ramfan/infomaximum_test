import {FORM_SUBMITED} from "../constants";
const initialState = {
    tokenHash: null,
    isReady: false
};

export default (token = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case FORM_SUBMITED:
            return {
                tokenHash: payload,
                isReady: true
            }
    }
    return token
}
