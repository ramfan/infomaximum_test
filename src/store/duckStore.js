import {ERROR_REPORT, FORM_SUBMITED, GET_PROFILE_DATA} from "../constants";

const actionTypes = {
    FORM_SUBMITED: "FORM_SUBMITED",
    GET_PROFILE_DATA: "GET_PROFILE_DATA",
    SHOW_MENU: 'SHOW_MENU',
    ERROR_REPORT: "ERROR_REPORT"
};

const actionCreators = {
    auth: (token) => ({
        type: actionTypes.FORM_SUBMITED,
        payload: {token}
    }),
    Profile: (data) => ({
        type: actionTypes.GET_PROFILE_DATA,
        payload: {data}
    }),
    show: (state) => ({
        type: actionTypes.SHOW_MENU,
        payload: state
    }),
    errorReport: (error) => ({
        type: actionTypes.ERROR_REPORT,
        payload: {error}
    })
};
const initialAuthState = {
    tokenHash: null,
    reportError: null,
    isReady: false
};
const initialFormReducerState = {
    login: undefined,
    password: undefined
};
const initialMenuState = {
    flag: false
};
const initialProfileState = {
    firstName: null,
    lastName: null,
    email: null,
    token: null,
    isReady: false
};
const auth = (token = initialAuthState, action) => {
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
};

const formReducer = (users = initialFormReducerState, action) => {
    const {type, payload} = action;

    switch (type){
        case FORM_SUBMITED:
            return {
                login: payload.user.login,
                password: payload.user.id
            }
    }
    return users
};

const menuOption = (state = initialMenuState, action) => {
    switch (action.type){
        case SHOW_MENU: {
            console.log("REDUCER", action.payload);
            return {
                flag: !action.payload
            }
        }
    }
    return state

};

const Profile = (state = initialProfileState, action) => {

    const {type, payload} = action;

    switch (type){
        case GET_PROFILE_DATA: {
            return {
                firstName: payload.data.data.User.firstName,
                lastName: payload.data.data.User.lastName,
                email: payload.data.data.User.email,
                token: payload.data.match.params.token,
                isReady: true
            }
        }
    }
    return state;

}

