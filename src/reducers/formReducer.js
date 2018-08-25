import {FORM_SUBMITED} from "../constants";

const initialState = {
    login: undefined,
    password: undefined
};
export default (users = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case FORM_SUBMITED:
            return {
                login: payload.user.login,
                password: payload.user.id
            }
    }
    return users
}
