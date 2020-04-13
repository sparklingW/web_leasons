import { combineReducers } from 'redux';
import { auth_reducer } from './auth_reducer';
import { articles_reducer } from './articles_reducer';

export const rootReducer = combineReducers({
    auth_reducer,
    articles_reducer,
});