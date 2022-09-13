import { all } from "redux-saga/effects"
import { photoWatcher } from "./photoSaga"
import { postWatcher } from "./postSaga"

export function* rootWatcher() {
    yield all([photoWatcher(), postWatcher()])
}
