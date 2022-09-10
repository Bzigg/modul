import {all} from 'redux-saga/effects';
import {photoWatcher} from './photoSaga';

export function* rootWatcher() {
    yield all([photoWatcher()]);
}