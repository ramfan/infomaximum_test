import {FORM_SUBMITED} from "../constants";

export function auth(token) {
    console.log(token);
    return {
        type: FORM_SUBMITED,
        payload: {token}
    }
}