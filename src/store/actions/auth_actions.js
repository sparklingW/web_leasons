import * as consts from '../consts';

export const loginAction = (payload) => ({
    type: consts.INIT_LOGIN,
    payload
});