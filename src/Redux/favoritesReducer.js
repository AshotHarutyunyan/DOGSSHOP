import { getFavoritesAc, favoritesStatusAc, addToFavoritesAc, setFavoriteAc, removeFromFavoritesAc, setFavoriteWithSubbreedsAc } from "./actionCreators";

export const GET_FAVORITES = 'GET_FAVORITES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const FAVORITES_STATUS = 'FAVORITES_STATUS';

let initialState = {
    favorites: [],
    status: false,
};

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITES_STATUS:
            return { ...state, status: action.status };
        case GET_FAVORITES:
            return { ...state, favorites: action.favorites };
        case ADD_TO_FAVORITES:
            let added_state = {
                ...state,
                favorites: [
                    ...state.favorites, action.favorite
                ]
            };
             localStorage.setItem('favorites', JSON.stringify(added_state));
            return added_state
        case REMOVE_FROM_FAVORITES:
            let removed_state = {
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.id)
            };
             localStorage.setItem('favorites', JSON.stringify(removed_state));
            return removed_state
        default:
            return state;
    }
};


export const getFavorites = (favorites) => (dispatch) => {
    dispatch(getFavoritesAc(favorites))
    dispatch(favoritesStatusAc(true))
};

export const setFavorite = (addOrRemove, favorite, id, breedName, page) => (dispatch) => {
    if (!addOrRemove) {
        dispatch(addToFavoritesAc(favorite))
        dispatch(setFavoriteAc(id, breedName, page))
    } else {
        dispatch(removeFromFavoritesAc(id))
        dispatch(setFavoriteAc(id, breedName, page))
    }
};

export const setFavoriteWithSubbreeds = (addOrRemove, favorite, id, breedName, page, subBreedName) => (dispatch) => {
    if (!addOrRemove) {
        dispatch(addToFavoritesAc(favorite))
        dispatch(setFavoriteWithSubbreedsAc(id, breedName, page, subBreedName))
    } else {
        dispatch(removeFromFavoritesAc(id))
        dispatch(setFavoriteWithSubbreedsAc(id, breedName, page, subBreedName))
    }
};

