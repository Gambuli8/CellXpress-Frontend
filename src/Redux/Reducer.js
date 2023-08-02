import { POST_USER } from "./ActionTypes";
const initialState = {
    user:[],
}

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case POST_USER:
            return {
                ...state,
                user: [...state.user, payload],
            }
            default:
            return { ...state }
    }
};

export default Reducer;