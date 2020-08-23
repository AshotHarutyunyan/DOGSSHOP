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

