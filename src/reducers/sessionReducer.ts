import { createReducer, ActionType } from 'typesafe-actions';

import {
  CLEAR_AUTH_USER,
  SET_AUTH_USER,
  SET_IS_LOADING_AUTH_USER,
  SET_SIGN_IN_STATUS,
} from 'actions/constants';
import { sessionActions } from 'actions';
import { UserGetResponse as User } from 'services/responses';
import { SignInStatus } from 'actions/types';

export type SessionState = {
  authUser: User | null;
  isLoadingAuthUser: boolean;
  signInStatus: SignInStatus;
  signInMessage?: string;
};

export type SessionAction = ActionType<typeof sessionActions>;

const initialState: SessionState = {
  authUser: null,
  isLoadingAuthUser: false,
  signInStatus: SignInStatus.Idle,
};

export default createReducer<SessionState, SessionAction>(initialState)
  .handleAction(SET_IS_LOADING_AUTH_USER, (state, action) => {
    return { ...state, isLoadingAuthUser: action.payload.isLoadingAuthUser };
  })
  .handleAction(SET_AUTH_USER, (state, action) => {
    return { ...state, authUser: action.payload.authUser };
  })
  .handleAction(CLEAR_AUTH_USER, (state) => {
    return { ...state, authUser: null };
  })
  .handleAction(SET_SIGN_IN_STATUS, (state, action) => {
    return {
      ...state,
      signInStatus: action.payload.status,
      signInMessage: action.payload.message,
    };
  });
