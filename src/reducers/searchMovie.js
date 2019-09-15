const searchReducer = (state = "", action) => {
    switch(action.type){
        case 'SEARCH':
            return action.payload.toLowerCase();
        default:
            return state;
    }
}

export default searchReducer;