import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/'
import logger from "../midlewares/logger";

//const enhancer = applyMiddleware(logger)
const store = createStore(reducer);
export default  store