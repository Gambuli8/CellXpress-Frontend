import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import Reducer from "./Reducer.js"

export const store = createStore(
    Reducer
);