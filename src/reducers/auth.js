import {FORM_SUBMITED} from "../constants";
const initialState = {
    tokenHash: null
}

export default (token = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case FORM_SUBMITED:
            console.log('PAYLOAD', payload);
            return {
                tokenHash: payload,
            }
    }
    return token
}
