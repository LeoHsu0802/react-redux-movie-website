import toggleReducer from './lightToggle';
import loginReducer from './login'
import searchReducer from './searchMovie'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    lightToggle : toggleReducer,
    login : loginReducer,
    searchMovie : searchReducer
})

export default allReducers;