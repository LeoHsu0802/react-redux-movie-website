const lightToggle = (state = false, action){
    switch(action.type){
        case 'TOGGLE':
            return !state;
    }
}

export default lightToggle;