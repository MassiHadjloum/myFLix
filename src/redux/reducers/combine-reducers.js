import { combineReducers } from 'redux';
import { movieReducer } from './movies-reducer';

const reducer = combineReducers({
    reducerMovies: movieReducer,
});

export default reducer;