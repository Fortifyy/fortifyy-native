import {createSelector} from "reselect";

import {RootState} from "../reducers";

const getPending = (state: RootState) => state.users.pending;

const getUser = (state: RootState) => state.users.user;

const getError = (state: RootState) => state.users.error;

export const getUserSelector = createSelector(getUser, (user) => user);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending,
);

export const getErrorSelector = createSelector(getError, (error) => error);
