
import {
  GET_PRODUCT,
  GET_PRODUCTS_BY_NAME,
  GET_USERS,
} from "./ActionsTypes";
import axios from "axios";
import swal from "sweetalert2";


// funcion  para traer todos los productos de la db...
export function getProduct() {
    return async function (dispatch) {
        try {
            const response = (await axios.get("/products/")).data
            console.log("response", response)
            return dispatch({
                type: GET_PRODUCT,
                payload: response
            })
        } catch (error) {
           swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
        }
    }
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
      const response = await axios.get(
        `/products/search?keyword=${name}`
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

