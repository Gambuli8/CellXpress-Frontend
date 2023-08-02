<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducer.js";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
=======
import {createStore, applyMiddleware} from "redux"
 import thunk from "redux-thunk"
import rootReducer from "./Reducer"
 import {composeWithDevTools} from "redux-devtools-extension"

export const Store = createStore(
    rootReducer,
 composeWithDevTools(applyMiddleware(thunk))
);
>>>>>>> bc8ff0eb37d458ecf799cd9c490cabe56b1f8fc5
