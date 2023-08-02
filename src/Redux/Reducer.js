import { GET_PRODUCT, GET_USERS, GET_PRODUCTS_BY_NAME } from "./ActionsTypes";

let inicialState = {
  allProduct: [],
  allUsers: [],
  user: {},
  allProductsByName: [],
  viewProducts: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
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
  }
  return state;
};

export default rootReducer;
