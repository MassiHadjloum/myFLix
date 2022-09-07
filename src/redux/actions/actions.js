import { TypesActions } from "./actions-type"

export const getMovies = (movies) => {
    return {
        type: TypesActions.GET_MOVIES,
        payload: movies
    }
}

export const searchMovie = (movie) => {
    return {
        type: TypesActions.SEARCH_MOVIE,
        payload: movie
    }
}

export const selectMovie = (movie) => {
    return {
        type: TypesActions.SELECT_MOVIE,
        payload: movie
    }
}

export const addToMyList = (movie) => {
    return {
        type: TypesActions.ADD_TO_MY_LIST_MOVIE,
        payload: movie
    }
}

export const removeFromMyList = (movie) => {
    return {
        type: TypesActions.REMOVE_FROM_MY_LIST,
        payload: movie
    }
}

export const likeMovie = (id, like) => {
    return {
        type: TypesActions.LIKE_MOVIE,
        payload: {id: id, like: like}
    }
}

