import { POSTUPLOAD, REGISTRATION } from "./Type";


export const UserRegistraion = (userData) => {
    // console.log("userData",userData);
    return {
        type: REGISTRATION,
        payload: userData,
    };
};

export const PostUploadHandle = (PostUploadData) => {
    // console.log("PostUploadData",PostUploadData);
    return {
        type: POSTUPLOAD,
        payload: PostUploadData,
    };
};