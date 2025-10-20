import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import {thunk} from "redux-thunk";

export const store = legacy_createStore(reducer, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     applyMiddleware(thunk),);
