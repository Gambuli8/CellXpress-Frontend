import {
  GET_ALL_PRODUCTS,
  GET_USERS,
  GET_PRODUCTS_BY_NAME,
} from "./ActionsTypes";

let inicialState = {
  allProducts: [],
  allUsers: [],
  user: {},
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        allProducts: action.payload,
      };
  }
  return state;
};

export default rootReducer;
