import * as consts from '../consts';

const initialState = {
    topics: [{
        title: 'React',
    }, {
        title: 'JavaScript'
    }, {
        title: 'Node.js'
    }, {
        title: 'Express'
    }, {
        title: 'Vue.js'
    }],
    currentTopic: '',
};

export const articles_reducer = (state = initialState, action) => {
    switch (action.type) {
        case consts.REQUEST_ARTICLES:
            return {
                ...state,
                currentTopic: action.payload.currentTopic,
            };
            default:
                return {
                    ...state,
                }
    }
}