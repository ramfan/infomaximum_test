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
    auth: (token) => {
        sessionStorage.setItem('token', token);
        return{
        type: actionTypes.FORM_SUBMITED,
        payload: {token},
    }},
    Profile: (data, params) => ({
        type: actionTypes.GET_PROFILE_DATA,
        payload: {data , params}
    }),
    show: (state) => ({
        type: actionTypes.SHOW_MENU,
        payload: state
    }),
    errorReport: (error, flag) => ({
        type: actionTypes.ERROR_REPORT,
        payload: {error, flag}
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
     isReadyError: false
 }
 export const getReducer = (state = initialState, action) =>  {
     const {type, payload} = action;
     switch (type){
         case actionTypes.FORM_SUBMITED:

             return {
                 ...state,
                 tokenHash: jwt_decode(payload.token).userId,
                 isReady: true,
                 errorReport: null,
                 isReadyError: false
             };
         case actionTypes.ERROR_REPORT: {
             return {
                 ...state,
                 reportError: payload.error,
                 isReadyError: payload.flag
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
                 firstName: payload.data.firstName,
                 lastName: payload.data.lastName,
                 email: payload.data.email,
                 token: payload.params.match.params.token,
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


