// breedsSelector
export const GET_BREEDS = (state) => {
    return state.breeds.breeds;
}

export const GET_BREEDS_REQUEST_STATUS = (state) => {
    return state.breeds.request;
}

export const GET_PAGE_ITEMS_COUNT = (state) => {
    return state.breeds.pageItemsCount;
}

// favoritesSelectors
export const GET_FAVORITES_SELECTOR = (state) => {
    return state.favorites.favorites;
}

export const GET_FAVORITES_REQUEST_STATUS = (state) => {
    return state.favorites.status;
}

// swiperSelectors
export const GET_SWIPERINFO = (state) => {
    return state.home.swiperInfo;
}

export const GET_SWIPERINFO_REQUEST_STATUS = (state) => {
    return state.home.requestStatus;
}



