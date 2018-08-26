import {FORM_SUBMITED} from "../constants";

export function auth(token) {

    return {
        type: FORM_SUBMITED,
        payload: {token}
    }
}