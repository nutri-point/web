import { LOG_IN, SIGN_OUT } from 'actions';
import { clearAuthUser, setAuthUser } from 'actions/session';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthenticationService } from 'services';
import { logIn as logInAction } from 'actions/session';
import { toast } from 'react-toastify';
import { getErrorMessage } from 'utils';
import { messages } from 'const';
import { UserGetResponse } from 'services/responses';

export function* logInWatcher() {
  yield takeLatest(LOG_IN, logInFlow);
}

function* logInFlow(action: ReturnType<typeof logInAction>) {
  try {
    const { email, password } = action.payload;
    const user: UserGetResponse = yield call(
      AuthenticationService.logIn,
      email,
      password,
    );
    yield put(setAuthUser(user));

    toast.success(messages.logInSuccess);
  } catch (error) {
    toast.error(`❌ ${getErrorMessage(error)}`);
  }
}

export function* signOutWatcher() {
  yield takeLatest(SIGN_OUT, signOutFlow);
}

function* signOutFlow() {
  yield call(AuthenticationService.signOut);
  yield put(clearAuthUser());
}
