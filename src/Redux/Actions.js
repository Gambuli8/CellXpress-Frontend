
import axios from "axios"
// ACTION TYPE
export const GET_PRODUCT = "GET_PRODUCT"
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
        }
    }
}