import {POST_USER} from "../Redux/ActionTypes"
import axios from "axios"

export const postUser = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3002/users', user);
            dispatch({ type: POST_USER, payload: response.data });
            alert(`Bienvenido ${user.name} a CELLXPRESS`)
            return response;
        } catch (error) {
            alert(error.message)
        }
    };
};