import {
  GET_ALL_PRODUCTS,
  GET_USERS,
  GET_PRODUCTS_BY_NAME,
  POST_PRODUCT
} from "./ActionsTypes";

let inicialState = {
  allProduct: [],
  allUsers: [],
  user: {},
  allProductsByName: [],
  viewProducts: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProduct: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        allProductsByName: action.payload,
      };
    case POST_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
  }
  return state;
};

export default rootReducer;
