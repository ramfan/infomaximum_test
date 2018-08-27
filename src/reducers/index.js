import {combineReducers} from 'redux'
import formReducer from "./formReducer";
import {reducer} from 'redux-form'
import auth from "./auth";
import Profile from "./Profile";


export default combineReducers({
    auth,
    Profile,
    form: reducer

})