import {combineReducers} from 'redux'
import {reducer} from 'redux-form'
import {getReducer} from "../store/duckStore";
import {Profile} from "../store/duckStore";


export default combineReducers({
    getReducer,
    form: reducer

})