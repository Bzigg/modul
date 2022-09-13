import { put, call, takeEvery } from "redux-saga/effects"
import { fetchAllPhoto } from "../API/PhotoService"
import { FETCH_ALL_PHOTO, setAllPhotoAction } from "../store/photoReducer"

function* fetchAllPhotoWorker() {
    const data = yield call(fetchAllPhoto)
    const json = yield call(() => new Promise((res) => res(data.json())))
    yield put(setAllPhotoAction(json))
}

export function* photoWatcher() {
    yield takeEvery(FETCH_ALL_PHOTO, fetchAllPhotoWorker)
}
