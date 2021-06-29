import { createReducer, ActionType } from 'typesafe-actions';

import { CLEAR_AUTH_USER, SET_AUTH_USER } from 'actions/constants';
import { sessionActions } from 'actions';
import { User } from 'types';

export type SessionState = {
  authUser: User | null;
};

export type SessionAction = ActionType<typeof sessionActions>;

const initialState: SessionState = {
  authUser: null,
};

export default createReducer<SessionState, SessionAction>(initialState)
  .handleAction(SET_AUTH_USER, (state, action) => {
    return { ...state, authUser: action.payload.authUser };
  })
  .handleAction(CLEAR_AUTH_USER, (state) => {
    return { ...state, authUser: null };
  });
