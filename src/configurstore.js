
import { createStore, applyMiddleware } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import {thunk} from "redux-thunk";
import reducers from "./reducers/index";

/** Redux Store */
const store = createStore(reducers, applyMiddleware(thunk));


export default store;