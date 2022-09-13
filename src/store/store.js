import { applyMiddleware, combineReducers, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import { rootWatcher } from "../saga/saga"
import { photoReducer } from "./photoReducer"
import { modalReducer } from "./modalReducer"
import { postReducer } from "./postReducer"

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    modal: modalReducer,
    photo: photoReducer,
    post: postReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootWatcher)
