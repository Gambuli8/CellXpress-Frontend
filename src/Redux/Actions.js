import Swal from "sweetalert2";
import {
  GET_ALL_PRODUCTS,
  GET_USERS,
  POST_USER,
  GET_PRODUCTS_BY_NAME,
  GETFILTERS,
  ORDERPHONE,
  POST_PRODUCT,
  LOGIN_USER,
  RAMFILTERS,
  PIXELESFILTERS,
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

export const postProduct = (products) => {
  console.log("productsssss", products);
  return async (dispatch) => {
    try {
      const response = await axios.post("/products", products);
      dispatch({ type: POST_PRODUCT, payload: response.data });
      alert(`${products.title} Agregado correctamente`);
      return response;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = (await axios.get("/")).data;
      console.log("actionsssss", response);
      dispatch({
        type: GET_USERS,
        payload: response,
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
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: response,
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
      const response = await axios.post("/", user);
      dispatch({ type: POST_USER, payload: response.data });
      alert(`${user.name} Bienvenido  a CELLXPRESS`);
      return response;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getfilters = (info) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(
          `products/brand/${info.brand}?minPrice=${info.minPrice}&maxPrice=${info.maxPrice}`
        )
      ).data.products;
      if (response.length === 0) {
        Swal.fire({
          text: "Producto no encontrado",
          icon: "error",
          confirmButtonText: "ok",
        });
      }
      dispatch({
        type: GETFILTERS,
        payload: response,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const getfiltersram = (info) => {
  
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(
          `http://localhost:3002/products/filter?brand=&ram=${info}&cameraInches=`
           
          )
        
      ).data.products;
      console.log("PRODUCTOSSSSSS", response)
      if (response.length === 0) {
        Swal.fire({
          text: "Producto no encontrado",
          icon: "error",
          confirmButtonText: "ok",
        });
      }
      dispatch({
        type: RAMFILTERS,
        payload: response,
      });
    } catch (error) {
      alert(error);
    }
  };
};
export const getfilterspixeles = (info) => {
  console.log("33333333333333333", info)
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(
          `http://localhost:3002/products/filter?brand=&ram=&cameraInches=${info}`
           
          )
        
      ).data.products;
      console.log("PRODUCTOSSSSSS", response)
      if (response.length === 0) {
        Swal.fire({
          text: "Producto no encontrado",
          icon: "error",
          confirmButtonText: "ok",
        });
      }
      dispatch({
        type: PIXELESFILTERS,
        payload: response,
      });
    } catch (error) {
      alert(error);
    }
  };
};



export function orderPhone(order) {
  return function (dispatch) {
    return dispatch({
      type: ORDERPHONE,
      payload: order,
    });
  };
}
export const loginUser = (userlog) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3002/users", userlog);
      dispatch({ type: LOGIN_USER, payload: response.data });
      alert(`Bienvenido de nuevo a CELLXPRESS`);
      return response;
    } catch (error) {
      alert(error.message);
    }
  };
};
