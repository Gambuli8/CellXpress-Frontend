/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import {
  GET_ALL_PRODUCTS,
  GET_USERS,
  POST_USER,
  GET_PRODUCTS_BY_NAME,
  GETFILTERS,
  ORDERPHONE,
  POST_PRODUCT,
  PUT_USER,
  PUT_PRODUCT,
  SUCCESS_ORDER,
  POST_ORDER,
  POST_USERID,
  LOGIN_USER,
  RAMFILTERS,
  PIXELESFILTERS,
  DELETE_PRODUCT_CART,
  GET_ORDER_BUY,
  GET_PRODUCT_BY_ID,
  GET_ORDER_BY_ID,
  GET_USER_BY_ID,
  GET_PENDING_ORDER_BY_ID,
  CART_UPDATE_QUANTITY_SUCCESS,
  CART_UPDATE_QUANTITY_FAILURE,
  STAR,
  RESET_STAR,
  GET_COMENTARIOS,
  GET_REVIEW_USER,
} from "./ActionsTypes";

import axios from "axios";
// import swal from "sweetalert2";

// funcion  para traer todos los productos de la db...
export function getProduct() {
  return async function (dispatch) {
    try {
      const response = (
        await axios.get("https://cellxpress.onrender.com/products")
      ).data;

      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const postProduct = (products) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://cellxpress.onrender.com/products",
        products
      );
      dispatch({ type: POST_PRODUCT, payload: response.data });
      alert(`${products.title} Agregado correctamente`);
      return response;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const putProduct = (products) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://cellxpress.onrender.com/products/${products.id}`,
        {
          isDeactivated: products.isDeactivated,
        }
      );
      if (products.isDeactivated) {
        Swal.fire({
          text: `${products.title} Desactivado Correctamente`,
          icon: "error",
        });
      } else {
        Swal.fire({
          text: `${products.title} Activado Correctamente`,
          icon: "success",
        });
      }

      dispatch(getProduct());
    } catch (error) {
      console.log(error);
      /*alert(error.message)*/
    }
  };
};
export const putEditProduct = (products) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://cellxpress.onrender.com/products/${products._id}`,
        products
      );
      if (response) {
        Swal.fire({
          text: `${products.title} Actualizado Correctamente`,
          icon: "success",
        });
      }
      dispatch(getProduct());
    } catch (error) {
      if (error) {
        Swal.fire({
          text: `${products.title} No se pudo actualizar`,
          icon: "error",
        });
      }

      console.log(error);
      /*alert(error.message)*/
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = (await axios.get("https://cellxpress.onrender.com/"))
        .data;
      dispatch({
        type: GET_USERS,
        payload: response,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getProductsByName = (name) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(
          `https://cellxpress.onrender.com/products/search?keyword=${name}`
        )
      ).data.products;

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
      alert(error.message);
    }
  };
};

export const postUser = (user) => {
  console.log("usuario", user);
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://cellxpress.onrender.com/",
        user
      );
      dispatch({ type: POST_USER, payload: response.data });
      alert(`${user.name} Bienvenido  a CELLXPRESS`);
      console.log(response);
      return response;
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const postInfo = (info) => {
  return async (dispatch) => {
    try {
      console.log(info);
      const response = await axios.post(
        "https://cellxpress.onrender.com/order/add-to-cart",
        info
      );
      dispatch({ type: POST_ORDER, payload: response.data });
    } catch (error) {
      console.log(error.message.data);
    }
  };
};

//PUT USER PARA BANEAR
export const putUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://cellxpress.onrender.com/users/${user.id}`,
        {
          isActive: user.isActive,
        }
      );
      if (user.isActive) {
        Swal.fire({
          text: `${user.name} Activado Correctamente`,
          icon: "success",
        });
      } else {
        Swal.fire({
          text: `${user.name} Desactivado Correctamente`,
          icon: "error",
        });
      }

      dispatch(getUsers());
    } catch (error) {
      console.log(error);
      /*alert(error.message)*/
    }
  };
};

export const deleteProduct = (productId, userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://cellxpress.onrender.com/order/remove-from-cart/${userId}/${productId}`
      );
      dispatch({ type: DELETE_PRODUCT_CART, payload: response.data });
    } catch (error) {
      console.log(error.message.data);
    }
  };
};

// export const allDelete = (userId) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:3002/order/empty-cart/${userId}`
//       );
//       dispatch({ type: ALL_DELETE_CART, payload: response.data });
//     } catch (error) {
//       console.log(error.message.data);
//     }
//   };
// };

export const postUserId = (userId) => {
  return async (dispatch) => {
    try {
      console.log("entra", userId);
      const response = await axios.post(
        "https://cellxpress.onrender.com/order/checkout",
        { userId } // Enviar userId en el cuerpo
      );
      dispatch({ type: POST_USERID, payload: response.data });
      return response; // Retorna la respuesta completa
    } catch (error) {
      console.log(error);
      throw error; // Lanza el error nuevamente para que pueda ser manejado por el componente
    }
  };
};

//PUT PARA EDITAR USUARIO (SOLO NOMBRE Y TELEFONO)
export const editPutUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://cellxpress.onrender.com/users/${user.id}`,
        {
          name: user.name,
          phone: user.phone,
        }
      );
      console.log("8888", response);
      dispatch(getUsers());
    } catch (error) {
      console.log(error);
      /*alert(error.message)*/
    }
  };
};

export const getfilters = (info) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(
          `https://cellxpress.onrender.com/products/filter?brand=${info.brand}&minPrice=${info.minPrice}&maxPrice=${info.maxPrice}&ram=${info.ram}&cameraInches=${info.camera}&screenSize=`
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
      alert(error.message);
    }
  };
};

export const getfiltersram = (info) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(
          `https://cellxpress.onrender.com/products/filter?brand=&ram=${info}&cameraInches=`
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
        type: RAMFILTERS,
        payload: response,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getfilterspixeles = (info) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(
          `https://cellxpress.onrender.com/products/filter?brand=&ram=&cameraInches=${info}`
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
        type: PIXELESFILTERS,
        payload: response,
      });
    } catch (error) {
      alert(error.message);
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
      const response = await axios.post(
        "https://cellxpress.onrender.com/users",
        userlog
      );
      dispatch({ type: LOGIN_USER, payload: response.data });
      alert(`Bienvenido de nuevo a CELLXPRESS`);
      return response;
    } catch (error) {
      alert(error.message);
    }
  };
};

//funcion para traer todas las ordenes de compras
export const orderBuy = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://cellxpress.onrender.com/order/all/`
      );

      dispatch({
        type: GET_ORDER_BUY,
        payload: response.data,
      });
    } catch (error) {
      console.log("errorrr", error);
    }
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(`https://cellxpress.onrender.com/products/${id}`)
      ).data.product;
      dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: response,
      });
    } catch (error) {
      console.log("errorur", error);
    }
  };
};

export const getOrderById = (id) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(
          `https://cellxpress.onrender.com/order/orders/user/${id}`
        )
      ).data;
      dispatch({
        type: GET_ORDER_BY_ID,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getPendingOrderById = (id) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(
          `https://cellxpress.onrender.com/order/pendingOrders/user/${id}`
        )
      ).data;
      dispatch({
        type: GET_PENDING_ORDER_BY_ID,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//get user by ID

export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(`https://cellxpress.onrender.com/users/${id}`)
      ).data;
      dispatch({
        type: GET_USER_BY_ID,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postOrder = (order) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://cellxpress.onrender.com/order/add-to-cart",
        order
      );
      dispatch({ type: POST_ORDER, payload: response.data });
      return response;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const updateCartItemQuantity =
  (userId, productId, quantity) => async (dispatch) => {
    try {
      const response = await axios.put(
        `https://cellxpress.onrender.com/order/update-cart/${userId}/${productId}`,
        { quantity }
      );
      dispatch({ type: CART_UPDATE_QUANTITY_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CART_UPDATE_QUANTITY_FAILURE, payload: error.message });
    }
  };

export function star(order) {
  return function (dispatch) {
    return dispatch({
      type: STAR,
      payload: order,
    });
  };
}

export function resetStar() {
  return function (dispatch) {
    return dispatch({
      type: RESET_STAR,
    });
  };
}

export const postCalificar = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/rating/reviews/${user.productId}`, {
        comment: user.comment,
        num: user.num,
        nickname: user.nickname,
      });
      Swal.fire({
        text: "Producto Calificado",
        icon: "success",
        confirmButtonText: "ok",
      });
    } catch (error) {
      Swal.fire({
        text: "Ya calificaste este Producto",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};

//get comentarios

export const getComentarios = (id) => {
  return async (dispatch) => {
    try {
      const response = (await axios.get(`/products/${id}/reviews`)).data
        .reviews;
      console.log("999999999999999999999999999999999", response);

      dispatch({
        type: GET_COMENTARIOS,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//get

export const getReviewsUser = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      const response = (
        await axios.get(`/products/reviews-by-user/${id}`)
      ).data;
      
      dispatch({
        type: GET_REVIEW_USER,
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
