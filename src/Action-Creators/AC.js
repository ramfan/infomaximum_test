import {AUTH_SUCCESS} from "../constants";

export function auth(user) {
    return {
        type: AUTH_SUCCESS,
        payload: {user}
    }
}