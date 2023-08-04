import { POST_USER, POST_PRODUCT, LOGIN_USER, GET_ALL_PRODUCTS, GET_USERS, GET_PRODUCTS_BY_NAME } from "./ActionTypes";
const initialState = {
  user: [],
  allProduct: [],
  allUsers: [],
  user: {},
  allProductsByName: [],
  viewProducts: [],
}

const rootReducer = (state = inicialState, action) => {
  switch (type) {
    case POST_USER:
      return {
        ...state,
        user: [...state.user, payload],
      }
    case POST_PRODUCT:
      return {
        ...state,
        product: [...state.product, payload],
      }
    case LOGIN_USER:
      return {
        ...state,
        userlog: [...state.userlog, payload],
      }
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
    default:
      return { ...state }
  }
};


export default rootReducer;
