import {ERROR_REPORT, FORM_SUBMITED, GET_PROFILE_DATA, SHOW_MENU} from "../constants";

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
export function show(state) {
console.log('STATE', state)
    return {
        type: SHOW_MENU,
        payload: state
    }

}
export function errorReport(error) {
    return{
        type: ERROR_REPORT,
        payload: {error}
    }
}
