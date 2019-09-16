export const lightToggle = () => {
    return{
        type :　'TOGGLE'
    }
}

export const searchMovie = (movie) => {
    return{
        type : "SEARCH",
        payload : movie
    }
}

export const userLogin = (username) => {
    return{
        type : "SEARCH",
        payload : username
    }
}

