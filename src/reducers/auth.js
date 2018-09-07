import {ERROR_REPORT, FORM_SUBMITED} from "../constants";
const initialState = {
    tokenHash: null,
    reportError: null,
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
        case ERROR_REPORT: {
            return {
                reportError: payload
            }
        }
    }

    return token
}
