import { REGISTRATION,POSTUPLOAD } from "./Type";


const initialState = {
    registeredUser: undefined,
    postUpload: undefined,
};

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTRATION:
            return {
                ...state,
                registeredUser : payload,
            };
        case POSTUPLOAD:
            return {
                ...state,
                postUpload : [...state.postUpload, payload],
            };
        default:
            return state;
    }
}

export default UserReducer;