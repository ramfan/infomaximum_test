import {GET_PROFILE_DATA} from "../constants";

const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    token: null,
    isReady: false
};

export default (state = initialState, action) => {

    const {type, payload} = action;

    switch (type){
        case GET_PROFILE_DATA: {
            return {
                firstName: payload.data.data.User.firstName,
                lastName: payload.data.data.User.lastName,
                email: payload.data.data.User.email,
                token: payload.data.match.params.token,
                isReady: true
            }
        }
    }
    return state;

}