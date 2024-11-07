// import {legacy_createStore} from 'redux';
// import myReducer from '../reducers/myReducer';

// let store = legacy_createStore(myReducer);
// store.subscribe(()=>{
//     console.log(store.getState())
// })
// export default store;
// ------------------------- 1st way----------------------------->
import logger from 'redux-logger';
import {legacy_createStore} from 'redux';
import myReducer from '../reducers/myReducer';
import { applyMiddleware } from 'redux';
let store = legacy_createStore(myReducer,applyMiddleware(logger));

export default store;

// --------------------- 2nd way ----------------------------------->