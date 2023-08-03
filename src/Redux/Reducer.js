import { POST_USER,POST_PRODUCT } from "./ActionTypes";
const initialState = {
    user: [],
}

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_USER:
            return {
                ...state,
                user: [...state.user, payload],
            }
        case POST_PRODUCT:
            return {
                ...state,
                product: [...state.product, payload],
            }
        default:
            return { ...state }
    }
};

export default Reducer;