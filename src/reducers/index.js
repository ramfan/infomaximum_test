import {combineReducers} from 'redux'
import {reducer} from 'redux-form'
import {auth, getProcesset} from "../store/duckStore";
import {Profile} from "../store/duckStore";
import {menuOption} from "../store/duckStore";


export default combineReducers({
    auth,
    Profile,
    menuOption,
    getProcesset,
    form: reducer

})