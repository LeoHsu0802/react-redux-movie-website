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