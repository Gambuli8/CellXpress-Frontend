import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_USERS,
} from "./ActionsTypes";
import axios from "axios";
import swal from "sweetalert2";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductsByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/products/search?keyword=${name}`
      );
      dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
