

import { SET_BREED, SET_SUBBREEDS, REQUEST, SET_FAVORITE, SET_FAVORITE_WITHSUBBREEDS } from "./breedReducer";
import { STATUS_TEXT, SWIPER_INFO_TEXT } from "./homeReducer";
import { GET_FAVORITES, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, FAVORITES_STATUS } from "./favoritesReducer";
import { nanoid } from "nanoid";

// homeReducer

export const changeRequestStatus = (status) => { return { type: STATUS_TEXT, status } };
export const setswiperInfo = (swiperInfo) => { return { type: SWIPER_INFO_TEXT, swiperInfo } };

// breedReducer

export const setBreedAc = (breedObj, breedName) => ({ type: SET_BREED, breedObj, breedName });
export const setSubBreedAc = (subBreedName, subBreedObj, breedName) => ({ type: SET_SUBBREEDS, subBreedName, subBreedObj, breedName });
export const setRequestAc = (request) => { return { type: REQUEST, request } };
export const setFavoriteAc = (id, breedName, page) => ({ type: SET_FAVORITE, id, breedName, page })
export const setFavoriteWithSubbreedsAc = (id, breedName, page, subBreedName) => ({ type: SET_FAVORITE_WITHSUBBREEDS, id, breedName, page, subBreedName })

export let createBreadObj = (response, breedObj, page, breedName, withSubbreeds, subbreed) => {
    let items = response.message.map((item) => {
        let splicedItem = item.split('/');
        let breed = splicedItem[splicedItem.length - 2];
        let subbreed = '';
        if (breed.indexOf("-") > 0) {
            subbreed = breed.split('-');
            breed = subbreed[0]
            subbreed = subbreed[1]
        }
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        let favorite = false;
        let id = nanoid();
        if (favorites) {
            favorites.favorites.forEach(element => {
                if (element.img === item) {
                    favorite = true;
                    id = element.id;
                }
            });
        }
        return {
            id,
            breed,
            subbreed,
            img: item,
            favorite
        }
    });
    let newObj = { ...breedObj }
    if (withSubbreeds) {
        newObj['all'][`${page}`] = {};
        newObj['all'][`${page}`] = items;
    } else {
        newObj[`${page}`] = {};
        newObj[`${page}`] = items;
    }
    return newObj
};

// favoritesReducer

export const getFavoritesAc = (favorites) => ({ type: GET_FAVORITES, favorites });
export const addToFavoritesAc = (favorite) => ({ type: ADD_TO_FAVORITES, favorite });
export const removeFromFavoritesAc = (id) => ({ type: REMOVE_FROM_FAVORITES, id });
export const favoritesStatusAc = (status) => ({ type: FAVORITES_STATUS, status });



