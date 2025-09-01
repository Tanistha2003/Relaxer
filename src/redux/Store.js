import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";//middleware to handle asynchronous actions

import RootReducer from "./RootReducer"; //to manage the state of the application

const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;

