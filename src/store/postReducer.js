const postState = {
    postData: {
        id: null,
        url: null,
        comments: [],
    },
}

export const SET_POST = "SET_POST"
export const FETCH_POST = "FETCH_POST"
export const SEND_COMMENT = "SEND_COMMENT"
export const CLEAN = "CLEAN"
export const SEND_COMMENT_SUCCESS = "SEND_COMMENT_SUCCESS"

export const postReducer = (state = postState, action) => {
    switch (action.type) {
        case SET_POST:
            return { ...state, postData: action.payload }
        case CLEAN:
            return {
                ...state,
                postData: {
                    id: null,
                    url: null,
                    comments: [],
                },
            }
        case SEND_COMMENT_SUCCESS:
            let newState = {
                ...state,
            }

            newState.postData.comments.push({
                // Уникальный id, т.к. нет ответа с бэка
                id: Date.now(),
                date: Date.now(),
                text: action.payload,
            })
            return newState
        default:
            return state
    }
}

// Добавляет данные для открытия модально окна в стейт
export const setPostAction = (payload) => {
    return {
        type: SET_POST,
        payload,
    }
}

// Очищает стейт
export const cleanPostAction = () => {
    return {
        type: CLEAN,
    }
}

// Запрашивает данные о конкретной фотографии
export const fetchPostAction = (payload) => {
    return {
        type: FETCH_POST,
        payload,
    }
}

// Отправляет комментарий на бэк
export const sendCommentAction = (payload) => {
    return {
        type: SEND_COMMENT,
        payload,
    }
}

// Добавляет в стейт для модалки новый комментарий (только если ответ со статусом 204)
export const sendCommentSuccessAction = (payload) => {
    return {
        type: SEND_COMMENT_SUCCESS,
        payload,
    }
}
