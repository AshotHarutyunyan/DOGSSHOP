import { setRequestAc, setBreedAc, createBreadObj, setSubBreedAc } from "./actionCreators";
import { DOGSAPI } from "../api/ApiDatas";

export const SET_BREED = "SET_BREED",
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
            let stateForBreed = {...state}
            if(state.breeds[action.breedName][action.page]){
                stateForBreed = {
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
            }
            return stateForBreed
            case SET_FAVORITE_WITHSUBBREEDS:
                let stateForSubBreed = {...state};
                if(state.breeds[action.breedName][action.subBreedName][action.page]){
                    stateForSubBreed = {
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
                }
                return stateForSubBreed  
        case REQUEST:
            return { ...state, request: action.request };
        default:
            return state;
    }
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

