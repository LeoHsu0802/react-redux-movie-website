const loginReducer = (state = {loginModal : true, username : "" }, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                loginModal : false,
                username : action.payload
            }
        default:
            return state;
    }
}

export default loginReducer;