import {createStore, applyMiddleware} from "redux"
 import thunk from "redux-thunk"
import rootReducer from "./Reducer"
 import {composeWithDevTools} from "redux-devtools-extension"

export const Store = createStore(
    rootReducer,
 composeWithDevTools(applyMiddleware(thunk))
);