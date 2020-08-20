import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {homeReducer} from "./homeReducer";
import { breedsReducer } from "./breedReducer";

let reducers = combineReducers({
    home: homeReducer,
    breeds: breedsReducer,
    form: formReducer
})

let Store = createStore(reducers,applyMiddleware(thunk));

window.store = Store;

export default Store;