import {combineReducers} from 'redux'
import formReducer from "./formReducer";
import {reducer} from 'redux-form'
import auth from "./auth";


export default combineReducers({
    auth,
    form: reducer

})