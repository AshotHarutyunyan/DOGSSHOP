import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {homeReducer} from "./homeReducer";
import { breedsReducer } from "./breedReducer";
import { favoritesReducer } from "./favoritesReducer";

let reducers = combineReducers({
    home: homeReducer,
    breeds: breedsReducer,
    favorites: favoritesReducer,
    form: formReducer
})

let Store = createStore(reducers,applyMiddleware(thunk));

window.store = Store;

export default Store;