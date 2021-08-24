import { createSelector } from 'reselect';
import { RootState } from 'types';

export const selectSessionState = (state: RootState) => state.session;

export const selectAuthUser = createSelector(
  selectSessionState,
  (session) => session.authUser,
);

export const selectSignInStatus = createSelector(
  selectSessionState,
  (session) => session.signInStatus,
);

export const selectSignInMessage = createSelector(
  selectSessionState,
  (session) => session.signInMessage,
);
