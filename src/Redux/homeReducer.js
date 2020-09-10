import {changeRequestStatus,setswiperInfo} from './actionCreators'
import { DOGSAPI } from "../api/ApiDatas";

export const SWIPER_INFO_TEXT = 'SWIPER_INFO_TEXT';
export const STATUS_TEXT = 'STATUS_TEXT';

let initialState = {
    requestStatus: false,
    swiperInfo: [],
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_TEXT:
            return { ...state, requestStatus: action.status };
        case SWIPER_INFO_TEXT:
            return { ...state, swiperInfo: action.swiperInfo };
        default:
            return state;
    }
};

export const getSwiperInfo = (qty) => (dispatch) => {
    dispatch(changeRequestStatus(false))
    DOGSAPI.getAll(qty).then((response) => {
        let info = response.message.map((item) => {
            let splicedItem = item.split('/');
            let breed = splicedItem[splicedItem.length - 2]
            if (breed.indexOf("-")) {
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

