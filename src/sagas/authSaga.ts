import { LOG_IN, SIGN_OUT } from 'actions';
import { clearAuthUser, setAuthUser, setSignInStatus } from 'actions/session';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthenticationService } from 'services';
import { logIn as logInAction } from 'actions/session';
import { getErrorMessage } from 'utils';
import { UserGetResponse } from 'services/responses';
import { ActionStatus } from 'actions/types';
import axios from 'axios';

export function* logInWatcher() {
  yield takeLatest(LOG_IN, logInFlow);
}

function* logInFlow(action: ReturnType<typeof logInAction>) {
  try {
    yield put(setSignInStatus(ActionStatus.Loading));

    const { email, password } = action.payload;
    const user: UserGetResponse = yield call(
      AuthenticationService.logIn,
      email,
      password,
    );
    yield put(setSignInStatus(ActionStatus.Succeeded));
    yield put(setAuthUser(user));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = getErrorMessage(error);
      yield put(setSignInStatus(ActionStatus.Failed, message));
    }
  }
}

export function* signOutWatcher() {
  yield takeLatest(SIGN_OUT, signOutFlow);
}

function* signOutFlow() {
  yield call(AuthenticationService.signOut);
  yield put(clearAuthUser());
}
