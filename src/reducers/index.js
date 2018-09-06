import {combineReducers} from 'redux'
import formReducer from "./formReducer";
import {reducer} from 'redux-form'
import auth from "./auth";
import Profile from "./Profile";
import menuOption from "./menuOption";


export default combineReducers({
    auth,
    Profile,
    menuOption,
    form: reducer

})