import {AUTH} from "../constants";

const initialState = {
    login: undefined,
    id: undefined
};
export default (users = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case AUTH:
            return {
                login: payload.user.login,
                id: payload.user.id
            }
    }
    return users
}
