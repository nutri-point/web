import { LOG_IN, SIGN_OUT } from 'actions';
import { clearAuthUser, setAuthUser } from 'actions/session';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthenticationService } from 'services';
import { logIn as logInAction } from 'actions/session';
import { User } from 'types';

export function* logInWatcher() {
  yield takeLatest(LOG_IN, logInFlow);
}

function* logInFlow(action: ReturnType<typeof logInAction>) {
  const { email, password } = action.payload;
  const user: User = yield call(AuthenticationService.logIn, email, password);
  yield put(setAuthUser(user));
}

export function* signOutWatcher() {
  yield takeLatest(SIGN_OUT, signOutFlow);
}

function* signOutFlow() {
  yield call(AuthenticationService.signOut);
  yield put(clearAuthUser());
}
