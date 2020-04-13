import * as consts from '../consts';

const initialState = {
    user_name: '',
    email: '',
    password: '',
    isRegistered: false,
};

export const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case consts.INIT_LOGIN:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                isRegistered: true,
            };
        default: 
            return {
                ...state,
            }
    }
}