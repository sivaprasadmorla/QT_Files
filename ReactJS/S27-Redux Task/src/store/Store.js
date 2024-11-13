import { legacy_createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import Reducer from "../reducer/Reducer";
let store = legacy_createStore(Reducer,applyMiddleware(logger));


export default store;