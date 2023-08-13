/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
import {
  GET_ALL_PRODUCTS,
  GET_USERS,
  GET_PRODUCTS_BY_NAME,
  ORDERPHONE,
  GETFILTERS,
  POST_PRODUCT,
  POST_ORDER,
  POST_USER,
  LOGIN_USER,
  RAMFILTERS,
  PIXELESFILTERS,
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
    case LOGIN_USER:
      return {
        ...state,
        userlog: action.payload,
      };
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

    case GETFILTERS:
      return {
        ...state,
        allProduct: action.payload,
      };
    case RAMFILTERS:
      return {
        ...state,
        allProduct: action.payload,
      };
    case PIXELESFILTERS:
      return {
        ...state,
        allProduct: action.payload,
      };

    case ORDERPHONE:
      if (action.payload === "asc") {
        return {
          ...state,
          // filters: false,
          allProduct: [...state.allProduct].sort((prev, next) => {
            if (prev.brand > next.brand) return 1;
            if (prev.brand < next.brand) return -1;
            return 0;
          }),
        };
      } else if (action.payload === "des") {
        return {
          ...state,
          // filters: false,
          allProduct: [...state.allProduct].sort((prev, next) => {
            if (prev.brand > next.brand) return -1;
            if (prev.brand < next.brand) return 1;
            return 0;
          }),
        };
      } else if (action.payload === "mayorprecio") {
        return {
          ...state,
          // filters: false,
          allProduct: [...state.allProduct].sort((prev, next) => {
            if (prev.price > next.price) return -1;
            if (prev.price < next.price) return 1;
            return 0;
          }),
        };
      } else if (action.payload === "menorprecio") {
        return {
          ...state,
          // filters: false,
          allProduct: [...state.allProduct].sort((prev, next) => {
            if (prev.price > next.price) return 1;
            if (prev.price < next.price) return -1;
            return 0;
          }),
        };
      }

    case POST_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case POST_USER:
      return {
        ...state,
        user: action.payload,
      };
    // case POST_ORDER:
    // return {
    //   ...state,
    //   order: action.payload,
    // };
  }
  return state;
};

export default rootReducer;
