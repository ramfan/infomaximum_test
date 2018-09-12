import {proceset as initialProcessetState} from "../assets/processet";

const actionTypes = {
    FORM_SUBMITED: "FORM_SUBMITED",
    GET_PROFILE_DATA: "GET_PROFILE_DATA",
    SHOW_MENU: 'SHOW_MENU',
    ERROR_REPORT: "ERROR_REPORT",
    LOAD_PROCESSET: " LOAD_PROCESSET"
};

export const actionCreators = {
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
    }),
    processet: () => {
        type: actionTypes.LOAD_PROCESSET
    }
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
export const auth = (token = initialAuthState, action) => {
    const {type, payload} = action;

    switch (type){
        case actionTypes.FORM_SUBMITED:
            return {
                tokenHash: payload,
                isReady: true
            }
        case actionTypes.ERROR_REPORT: {
            return {
                reportError: payload
            }
        }
    }
    return token
};

export const formReducer = (users = initialFormReducerState, action) => {
    const {type, payload} = action;

    switch (type){
        case actionTypes.FORM_SUBMITED:
            return {
                login: payload.user.login,
                password: payload.user.id
            }
    }
    return users
};

export const menuOption = (state = initialMenuState, action) => {
    switch (action.type){
        case actionTypes.SHOW_MENU: {
            console.log("REDUCER", action.payload);
            return {
                flag: !action.payload
            }
        }
    }
    return state

};

export const Profile = (state = initialProfileState, action) => {

    const {type, payload} = action;

    switch (type){
        case actionTypes.GET_PROFILE_DATA: {
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

};

export const getProcesset = (state = initialProcessetState, action) => {
    const {type, payload} = action;
    switch (type){
        case actionTypes.LOAD_PROCESSET:
        {
            return {
                processet: state
            }
        }
    }
    return state
};
export const makeDuckStore = () => {
    return {
        actionTypes,
        actionCreators,
        auth,
        formReducer,
        menuOption,
        Profile,
    }
}
