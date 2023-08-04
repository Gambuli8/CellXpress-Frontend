
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
            const response = await axios.post('http://localhost:3002/', product);
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