import { POST_USER,POST_PRODUCT, LOGIN_USER } from "./ActionTypes";
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
        case LOGIN_USER:
            return {
                ...state,
                userlog:[...state.userlog, payload],
            }
        default:
            return { ...state }
    }
};

export default Reducer;