import {GET_PRODUCT} from "./Actions"
let initialState = {
    allProduct: [],
   

}

function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_PRODUCT:
            return {
                ...state,
                allProduct: action.payload
            }
            default: return state
    }

}
export default rootReducer