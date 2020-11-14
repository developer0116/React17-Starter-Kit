import { combineReducers } from 'redux';
import auth from './auth.reducer';

export const rootReducer = combineReducers({ auth });
