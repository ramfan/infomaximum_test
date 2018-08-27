import {GET_PROFILE_DATA} from "../constants";

const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    isReady: false
};

export default (state = initialState, action) => {

    const {type, payload} = action;

    switch (type){
        case GET_PROFILE_DATA: {
            return {
                firstName: payload.data.firstName,
                lastName: payload.data.lastName,
                email: payload.data.email,
                isReady: true
            }
        }
    }
    return state;

}