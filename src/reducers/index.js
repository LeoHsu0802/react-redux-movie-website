import toggleReducer from './lightToggle';
import loginReducer from './login'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    lightToggle : toggleReducer,
    login : loginReducer,
})

export default allReducers;