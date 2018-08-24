import {combineReducers} from 'redux'
import formReducer from "./formReducer";
import {reducer} from 'redux-form'


export default combineReducers({
    formReducer,
    form: reducer

})