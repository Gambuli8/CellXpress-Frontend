import Swal from "sweetalert2";
import {
  GET_ALL_PRODUCTS,
  GET_USERS,
  POST_USER,
  GET_PRODUCTS_BY_NAME,
  ORDERPHONE,
  FILTERPHONE
} from "./ActionsTypes";

import axios from "axios";
// import swal from "sweetalert2";

// funcion  para traer todos los productos de la db...
export function getProduct() {
  return async function (dispatch) {
    try {
      const response = (await axios.get("/products")).data;
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/");
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
        .data.products;
      console.log(response);
      if (response.length === 0) {
        Swal.fire({
          text: "No se encontro el producto",
          icon: "error",
          confirmButtonText: "ok",
        });
      }
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: response,
      });
    } catch (error) {
      alert(error);
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

export function orderPhone(order) {
  
  return function (dispatch) {

      return dispatch({
          type: ORDERPHONE,
          payload: order

      })
  }
}
// export function filterPhone(filter){
//   return function (dispatch){
//     return dispatch({
//       type: FILTERPHONE,
//       payload: filter
//     })
//   }
// }

export function filterPhone(filter){
  
  return function (dispatch){
    
    return dispatch({
      type: FILTERPHONE,
      payload: filter
    })
  }
}


// export function filterPhone(filter) {
//   return async function (dispatch) {
//     try {
//       const response = (await axios.get("/products")).data;
//       dispatch({
//         type: GET_ALL_PRODUCTS,
//         payload: response,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }