import toggleReducer from './lightToggle';
import loginReducer from './userLogin';
import searchReducer from './searchMovie';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    lightToggle : toggleReducer,
    userLogin : loginReducer,
    searchMovie : searchReducer
})

export default allReducers;