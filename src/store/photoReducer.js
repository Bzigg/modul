const photoState = {
    allPhoto: null,
}

export const SET_ALL_PHOTO = "SET_ALL_PHOTO"
export const FETCH_ALL_PHOTO = "FETCH_ALL_PHOTO"

export const photoReducer = (state = photoState, action) => {
    switch (action.type) {
        case SET_ALL_PHOTO:
            return { ...state, allPhoto: action.payload }
        default:
            return state
    }
}

// Добавляет все фото в стейт с бэка
export const setAllPhotoAction = (payload) => {
    return {
        type: SET_ALL_PHOTO,
        payload,
    }
}

// Получает все фото
export const fetchAllPhotoAction = () => {
    return {
        type: FETCH_ALL_PHOTO,
    }
}
