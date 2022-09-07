import { createStore } from "redux";
import reducers from './reducers/combine-reducers';

const store = createStore(reducers, {});// configureStore({reducer: reducers});

export default store;