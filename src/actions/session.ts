import { UserGetResponse as User } from 'services/responses';
import { createAction } from 'typesafe-actions';
import {
  CLEAR_AUTH_USER,
  LOG_IN,
  SET_AUTH_USER,
  SET_IS_LOADING_AUTH_USER,
  SET_SIGN_IN_STATUS,
} from './constants';
import { SignInStatus } from './types';

export const logIn = createAction(LOG_IN, (action) => {
  return (email: string, password: string) => action({ email, password });
});

export const setAuthUser = createAction(SET_AUTH_USER, (action) => {
  return (authUser: User | null) => action({ authUser });
});

export const setIsLoadingAuthUser = createAction(
  SET_IS_LOADING_AUTH_USER,
  (action) => {
    return (isLoadingAuthUser: boolean) => action({ isLoadingAuthUser });
  },
);

export const clearAuthUser = createAction(CLEAR_AUTH_USER);

export const setSignInStatus = createAction(SET_SIGN_IN_STATUS, (action) => {
  return (status: SignInStatus, message?: string) =>
    action({ status, message });
});
