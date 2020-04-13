import * as consts from '../consts';

export const setCurrentTopic = (payload) => ({
    type: consts.REQUEST_ARTICLES,
    payload,
})