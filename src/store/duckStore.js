import {proceset as initialProcessetState} from "../assets/processet";
import jwt_decode from 'jwt-decode';

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
 const initialState = {
     tokenHash: null,
     reportError: null,
     isReady: false,
     flag: false,
     firstName: null,
     lastName: null,
     email: null,
     token: null,
     isReadyProfile: false,
     processet: initialProcessetState,
 }
 export const getReducer = (state = initialState, action) =>  {
     const {type, payload} = action;

     switch (type){
         case actionTypes.FORM_SUBMITED:
             localStorage.setItem('token', payload.token)
             return {
                 ...state,
                 tokenHash: jwt_decode(payload.token).userId,
                 isReady: true
             };
         case actionTypes.ERROR_REPORT: {
             return {
                 ...state,
                 reportError: payload
             }
         }
         case actionTypes.SHOW_MENU: {
             return {
                 ...state,
                 flag: !action.payload
             }
         }
         case actionTypes.GET_PROFILE_DATA: {
             return {
                 ...state,
                 firstName: payload.data.data.User.firstName,
                 lastName: payload.data.data.User.lastName,
                 email: payload.data.data.User.email,
                 token: payload.data.match.params.token,
                 isReadyProfile: true
             }
         }
         case actionTypes.LOAD_PROCESSET:
         {
             return {
                 ...state,
                 processet: state.processet
             }
         }
     }
     return state
};


