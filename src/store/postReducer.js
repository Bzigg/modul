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
                id: Date.now(),
                date: Date.now(),
                text: action.payload,
            })
            return newState
        default:
            return state
    }
}

export const setPostAction = (payload) => {
    return {
        type: SET_POST,
        payload,
    }
}

export const cleanPostAction = () => {
    return {
        type: CLEAN,
    }
}

export const fetchPostAction = (payload) => {
    return {
        type: FETCH_POST,
        payload,
    }
}

export const sendCommentAction = (payload) => {
    return {
        type: SEND_COMMENT,
        payload,
    }
}

export const sendCommentSuccessAction = (payload) => {
    return {
        type: SEND_COMMENT_SUCCESS,
        payload,
    }
}
