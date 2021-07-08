import { UserGetResponse as User } from 'services/responses';
import { createAction } from 'typesafe-actions';
import {
  CLEAR_AUTH_USER,
  LOG_IN,
  SET_AUTH_USER,
  SET_IS_LOADING_AUTH_USER,
} from './constants';

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
