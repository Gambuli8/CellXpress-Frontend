import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import Reducer from "./Reducer.js"

 export const store = createStore(
    Reducer, composeWithDevTools(applyMiddleware(thunkMiddleware))
);