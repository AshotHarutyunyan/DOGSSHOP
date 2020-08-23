

import { DOGSAPI } from "../api/ApiDatas";
import { SET_BREED,SET_SUBBREEDS,REQUEST,SET_FAVORITE,SET_FAVORITE_WITHSUBBREEDS } from "./breedReducer";
import { STATUS_TEXT,SWIPER_INFO_TEXT } from "./homeReducer";
import { GET_FAVORITES, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./favoritesReducer";
import { nanoid } from "nanoid";

// homeReducer

const changeRequestStatus = (status) => { return { type: STATUS_TEXT, status } };
const setswiperInfo = (swiperInfo) => { return { type: SWIPER_INFO_TEXT, swiperInfo } };

export const getSwiperInfo = (qty) => (dispatch) => {
    dispatch(changeRequestStatus(false))
    DOGSAPI.getAll(qty).then((response) => {
        let info = response.message.map((item) => {
            let splicedItem = item.split('/');
            let breed = splicedItem[splicedItem.length - 2]
            if(breed.indexOf("-")){
                breed = breed.split('-');
                breed = breed[0]
            }
            return {
                breed,
                img: item
            }
        })
        dispatch(setswiperInfo(info))
        dispatch(changeRequestStatus(true))
    })
};



// breedReducer

const setBreedAc = (breedObj, breedName) => ({ type: SET_BREED, breedObj, breedName });
const setSubBreedAc = (subBreedName, subBreedObj, breedName) => ({ type: SET_SUBBREEDS, subBreedName, subBreedObj, breedName });
const setRequestAc = (request) => { return { type: REQUEST, request } };
const setFavoriteAc = (id,breedName,page) => ({ type: SET_FAVORITE, id , breedName ,page })
const setFavoriteWithSubbreedsAc = (id,breedName,page,subBreedName) => ({ type: SET_FAVORITE_WITHSUBBREEDS, id , breedName , page , subBreedName })


let createBreadObj = (response, breedObj, page, breedName, withSubbreeds, subbreed) => {
    let items = response.message.map(( item ) => {
        let splicedItem = item.split('/');
        let breed = splicedItem[splicedItem.length - 2];
        let subbreed = '';
        if (breed.indexOf("-") > 0) {
            subbreed = breed.split('-');
            breed = subbreed[0]
            subbreed = subbreed[1]
        }
        return {
            id: nanoid() ,
            breed,
            subbreed,
            img: item,
            favorite: false,
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

export const setAll = (breedObj, page, qty, breedName) => (dispatch) => {
    dispatch(setRequestAc(false))
    DOGSAPI.getAll(qty).then((response) => {
        dispatch(setBreedAc(createBreadObj(response, breedObj, page, breedName), breedName))
        dispatch(setRequestAc(true))
    })
};

export const setBreed = (breedObj, page, qty, breedName, withSubbreeds) => (dispatch) => {
    dispatch(setRequestAc(false))
    DOGSAPI.getByBreed(breedName, qty).then((response) => {
        dispatch(setBreedAc(createBreadObj(response, breedObj, page, breedName, withSubbreeds), breedName))
        dispatch(setRequestAc(true))
    })
};

export const setSubBreed = (breedObj, page, breedName, withSubbreeds, subbreed, qty) => (dispatch) => {
    dispatch(setRequestAc(false))
    DOGSAPI.getBySubBreed(breedName, subbreed, qty).then((response) => {
        let newObj = createBreadObj(response, breedObj, page, breedName, withSubbreeds, subbreed)
        dispatch(setSubBreedAc(subbreed, newObj, breedName))
        dispatch(setRequestAc(true))
    })
};

// favoritesReducer

export const getFavorites  = (favorites) => ({type: GET_FAVORITES , favorites});
const addToFavoritesAc = (favorite) => ({type: ADD_TO_FAVORITES , favorite});
const removeFromFavoritesAc = (id) => ({type: REMOVE_FROM_FAVORITES , id});


export const setFavorite = (addOrRemove,favorite,id,breedName,page) => (dispatch) => {
    if(addOrRemove === "false"){
        dispatch(addToFavoritesAc(favorite))
        dispatch(setFavoriteAc(id,breedName,page))
    }else{
        dispatch(removeFromFavoritesAc(id))
        dispatch(setFavoriteAc(id,breedName,page))
    }
};

export const setFavoriteWithSubbreeds = (addOrRemove,favorite,id,breedName,page,subBreedName) => (dispatch) => {
    if(addOrRemove === "false"){
        dispatch(addToFavoritesAc(favorite))
        dispatch(setFavoriteWithSubbreedsAc(id,breedName,page,subBreedName))
    }else{
        dispatch(removeFromFavoritesAc(id))
        dispatch(setFavoriteWithSubbreedsAc(id,breedName,page,subBreedName))
    }
};

