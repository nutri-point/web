import { createAction } from 'typesafe-actions';
import { CLEAR_AUTH_USER, LOG_IN, SET_AUTH_USER } from './constants';
import { User } from 'types';

export const logIn = createAction(LOG_IN, (action) => {
  return (email: string, password: string) => action({ email, password });
});

export const setAuthUser = createAction(SET_AUTH_USER, (action) => {
  return (authUser: User | null) => action({ authUser });
});

export const clearAuthUser = createAction(CLEAR_AUTH_USER);
