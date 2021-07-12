import { combineReducers } from 'redux';
import searchUserReducer from './searchUserReducer';
import userInformationsReducer from './userInformationsReducer';

const rootReducer = combineReducers({ searchUserReducer, userInformationsReducer });

export default rootReducer;
