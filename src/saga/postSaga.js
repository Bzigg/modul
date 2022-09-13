import { put, call, takeEvery } from "redux-saga/effects"
import { fetchPost, sendComment } from "../API/PhotoService"
import {
    FETCH_POST,
    SEND_COMMENT,
    sendCommentSuccessAction,
    setPostAction,
} from "../store/postReducer"

// Статус успешной записи комментария
const STATUS_OK = 204

function* fetchPostWorker({ payload }) {
    const data = yield call(fetchPost, payload.photoId)
    const json = yield call(() => new Promise((res) => res(data.json())))
    yield put(setPostAction(json))
}

function* sendCommentWorker({ payload }) {
    try {
        const data = yield call(sendComment, payload)
        const status = yield call(() => new Promise((res) => res(data.status)))
        if (status === STATUS_OK) {
            yield put(sendCommentSuccessAction(payload.comment))
        }
    } catch (e) {
        console.log(e)
    }
}

export function* postWatcher() {
    yield takeEvery(FETCH_POST, fetchPostWorker)
    yield takeEvery(SEND_COMMENT, sendCommentWorker)
}
