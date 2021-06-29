import { fork } from 'redux-saga/effects';
import { logInWatcher, signOutWatcher } from './authSaga';

export function* rootSaga() {
  yield fork(logInWatcher);
  yield fork(signOutWatcher);
}
