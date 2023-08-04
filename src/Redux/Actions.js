import { POST_USER, POST_PRODUCT,LOGIN_USER } from "../Redux/ActionTypes"
import axios from "axios"

export const postUser = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3002/users', user);
            dispatch({ type: POST_USER, payload: response.data });
            alert(`${user.name} Bienvenido a CELLXPRESS`)
            return response;
        } catch (error) {
            alert(error.message)
        }
    };
};
export const postProduct = (product) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3002/products', product);
            dispatch({ type: POST_PRODUCT, payload: response.data });
            alert(`${product.brand} Agregado correctamente`)
            return response;
        } catch (error) {
            alert(error.message)
        }
    };
};
export const loginUser = (userlog) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3002/users', userlog);
            dispatch({ type: LOGIN_USER, payload: response.data });
            alert(`Bienvenido de nuevo a CELLXPRESS`)
            return response;
        } catch (error) {
            alert(error.message)
        }
    };
};
import Swal from "sweetalert2";
import {
  GET_ALL_PRODUCTS,
  GET_USERS,
  POST_USER,
  GET_PRODUCTS_BY_NAME,
} from "./ActionsTypes";

import axios from "axios";
// import swal from "sweetalert2";

// funcion  para traer todos los productos de la db...
export function getProduct() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/products");
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

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
        if(response.products.length ===0){
          Swal.fire({
            text: "No se encontro el producto",
           icon: "error",
            confirmButtonText: "ok",
          });
          
        } else{
          dispatch({
            type: GET_PRODUCTS_BY_NAME,
            payload: response.products,
          });
         
        }
   
    } catch (error) {
      alert(error)
    }
  };
};

