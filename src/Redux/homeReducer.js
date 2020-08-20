import { DOGSAPI } from "../api/ApiDatas";

const swiperInfoText = 'setUserProfile';
const StatusText = 'changeStatus';

let initialState = {
    requestStatus: false,
    swiperInfo: [],
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case StatusText:
            return { ...state, requestStatus: action.status };
        case swiperInfoText:
            return { ...state, swiperInfo: action.swiperInfo };
        default:
            return state;
    }
};

const changeRequestStatus = (status) => { return { type: StatusText, status } };
const setswiperInfo = (swiperInfo) => { return { type: swiperInfoText, swiperInfo } };

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
