import { DOGSAPI } from "../api/ApiDatas";

const SET_BREED = "SET_BREED",
    SET_SUBBREEDS = "SET_SUBBREEDS",
    SET_FAVORITE = "SET_FAVORITE",
    SET_FAVORITE_WITHSUBBREEDS = "SET_FAVORITE_WITHSUBBREEDS",
    REQUEST = "REQUEST";

let initialState = {
    breeds: {
        "all": {},
        "affenpinscher": {},
        "african": {},
        "airedale": {},
        "akita": {},
        "appenzeller": {},
        "australian": {},
        "basenji": {},
        "beagle": {},
        "bluetick": {},
        "borzoi": {},
        "bouvier": {},
        "boxer": {},
        "brabancon": {},
        "briard": {},
        "buhund": {},
        "bulldog": {
            "all": {},
            "boston": {},
            "english": {},
            "french": {}
        },
        "bullterrier": {},
        "cairn": {},
        "cattledog": {},
        "chihuahua": {},
        "chow": {},
        "clumber": {},
        "cockapoo": {},
        "collie": {},
        "coonhound": {},
        "corgi": {},
        "cotondetulear": {},
        "dachshund": {},
        "dalmatian": {},
        "dane": {},
        "deerhound": {},
        "dhole": {},
        "dingo": {},
        "doberman": {},
        "elkhound": {},
        "entlebucher": {},
        "eskimo": {},
        "finnish": {},
        "frise": {},
        "germanshepherd": {},
        "greyhound": {},
        "groenendael": {},
        "havanese": {},
        "hound": {
            "all": {},
            "afghan": {},
            "basset": {},
            "blood": {},
            "english": {},
            "ibizan": {},
            "plott": {},
            "walker": {}
        },
        "husky": {},
        "keeshond": {},
        "kelpie": {},
        "komondor": {},
        "kuvasz": {},
        "labrador": {},
        "leonberg": {},
        "lhasa": {},
        "malamute": {},
        "malinois": {},
        "maltese": {},
        "mastiff": {
            "all": {},
            "bull": {},
            "english": {},
            "tibetan": {}
        },
        "mexicanhairless": {},
        "mix": {},
        "mountain": {
            "all": {},
            "bernese": {},
            "swiss": {}
        },
        "newfoundland": {},
        "otterhound": {},
        "ovcharka": {},
        "papillon": {},
        "pekinese": {},
        "pembroke": {},
        "pinscher": {},
        "pitbull": {},
        "pointer": {
            "all": {},
            "german": {},
            "germanlonghair": {}
        },
        "pomeranian": {},
        "poodle": {
            "all": {},
            "miniature": {},
            "standard": {},
            "toy": {}
        },
        "pug": {},
        "puggle": {},
        "pyrenees": {},
        "redbone": {},
        "retriever": {
            "all": {},
            "chesapeake": {},
            "curly": {},
            "flatcoated": {},
            "golden": {}
        },
        "ridgeback": {},
        "rottweiler": {},
        "saluki": {},
        "samoyed": {},
        "schipperke": {},
        "schnauzer": {
            "all": {},
            "giant": {},
            "miniature": {}
        },
        "setter": {
            "all": {},
            "english": {},
            "gordon": {},
            "irish": {}
        },
        "sheepdog": {
            "all": {},
            "english": {},
            "shetland": {}
        },
        "shiba": {},
        "shihtzu": {},
        "spaniel": {
            "all": {},
            "blenheim": {},
            "brittany": {},
            "cocker": {},
            "irish": {},
            "japanese": {},
            "sussex": {},
            "welsh": {}
        },
        "springer": {},
        "stbernard": {},
        "terrier": {
            "all": {},
            "american": {},
            "australian": {},
            "bedlington": {},
            "border": {},
            "dandie": {},
            "fox": {},
            "irish": {},
            "kerryblue": {},
            "lakeland": {},
            "norfolk": {},
            "norwich": {},
            "patterdale": {},
            "russell": {},
            "scottish": {},
            "sealyham": {},
            "silky": {},
            "tibetan": {},
            "toy": {},
            "westhighland": {},
            "wheaten": {},
            "yorkshire": {}
        },
        "vizsla": {},
        "waterdog": {},
        "weimaraner": {},
        "whippet": {},
        "wolfhound": {}
    },
    request: false,
    pageItemsCount: 20,
}

export const breedsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BREED:
            return {
                ...state,
                breeds: {
                    ...state.breeds, [`${action.breedName}`]: action.breedObj
                }
            }
        case SET_SUBBREEDS:
            return {
                ...state,
                breeds: {
                    ...state.breeds, [`${action.breedName}`]: {
                        ...state.breeds[`${action.breedName}`],
                        [`${action.subBreedName}`]: action.subBreedObj
                    }
                }
            }
        case SET_FAVORITE:
            return {
                ...state,
                breeds: {
                    ...state.breeds, [`${action.breedName}`]: {
                        ...state.breeds[`${action.breedName}`],
                        [`${action.page}`]: state.breeds[action.breedName][action.page].map( item => {
                            if ( item.id === action.id ) {
                                return { ...item, favorite: !item.favorite }
                            }
                            return item;
                        })
                    }
                }
            }
            case SET_FAVORITE_WITHSUBBREEDS:
                return {
                    ...state,
                    breeds: {
                        ...state.breeds, [action.breedName]: {
                            ...state.breeds[action.breedName],
                            [action.subBreedName]: {
                                ...state.breeds[action.breedName][action.subBreedName],
                                [action.page]: state.breeds[action.breedName][action.subBreedName][action.page].map( item => {
                                    if ( item.id === action.id ) {
                                        return { ...item, favorite: !item.favorite }
                                    }
                                    return item;
                                })
                            }
                        }
                    }
                }    
        case REQUEST:
            return { ...state, request: action.request };
        default:
            return state;
    }
};

const setBreedAc = (breedObj, breedName) => ({ type: SET_BREED, breedObj, breedName });
const setSubBreedAc = (subBreedName, subBreedObj, breedName) => ({ type: SET_SUBBREEDS, subBreedName, subBreedObj, breedName });
const setRequestAc = (request) => { return { type: REQUEST, request } };
export const setFavoriteAc = (id,breedName,page) => ({ type: SET_FAVORITE, id , breedName ,page })
export const setFavoriteWithSubbreedsAc = (id,breedName,page,subBreedName) => ({ type: SET_FAVORITE_WITHSUBBREEDS, id , breedName , page , subBreedName })


let createBreadObj = (response, breedObj, page, breedName, withSubbreeds, subbreed) => {
    let items = response.message.map((item , idx ) => {
        let splicedItem = item.split('/');
        let breed = splicedItem[splicedItem.length - 2];
        let subbreed = '';
        if (breed.indexOf("-") > 0) {
            subbreed = breed.split('-');
            breed = subbreed[0]
            subbreed = subbreed[1]
        }
        return {
            id: idx ,
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
        console.log(newObj)
        dispatch(setSubBreedAc(subbreed, newObj, breedName))
        dispatch(setRequestAc(true))
    })
};

