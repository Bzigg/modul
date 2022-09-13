const modalState = {
    modalVisible: false,
}

export const VISIBLE_ON = "VISIBLE_ON"
export const VISIBLE_OFF = "VISIBLE_OFF"

export const modalReducer = (state = modalState, action) => {
    switch (action.type) {
        case VISIBLE_ON:
            return { ...state, modalVisible: action.payload }
        case VISIBLE_OFF:
            return { ...state, modalVisible: action.payload }
        default:
            return state
    }
}

export const openModalAction = () => {
    return {
        type: VISIBLE_ON,
        payload: true,
    }
}

export const closeModalAction = () => {
    return {
        type: VISIBLE_OFF,
        payload: false,
    }
}
