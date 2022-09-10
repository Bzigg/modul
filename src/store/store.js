import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootWatcher } from '../saga/saga';
import { photoReducer } from './photoReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    photoReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootWatcher);
