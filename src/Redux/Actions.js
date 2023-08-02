import {
  GET_ALL_PRODUCTS,
  GET_USERS,
  POST_USER,
  GET_PRODUCTS_BY_NAME,
} from "./ActionsTypes";
import axios from "axios";
import swal from "sweetalert2";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/products");
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
      const response = await axios.get("/users");
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
      const response = (await axios.get(`/products/search?keyword=${name}`))
        .data;
      console.log("1111111111111111111", response);
      dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/users", user);
      dispatch({ type: POST_USER, payload: response.data });
      alert(`Bienvenido ${user.name} a CELLXPRESS`);
      return response;
    } catch (error) {
      alert(error.message);
    }
  };
};
