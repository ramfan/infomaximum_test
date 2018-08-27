import {FORM_SUBMITED, GET_PROFILE_DATA} from "../constants";

export function auth(token) {

    return {
        type: FORM_SUBMITED,
        payload: {token}
    }
}

export function Profile(data){
    return{
        type: GET_PROFILE_DATA,
        payload: { data }
    }

}