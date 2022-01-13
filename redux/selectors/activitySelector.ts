import {RootState} from "../reducers";
import {createSelector} from "reselect";

const loading = (state: RootState) => state.activities.loading;
const activities = (state: RootState) => state.activities.filters
  ? state.activities.activities.filter((item) => item.type === state.activities.filters)
  : state.activities.activities;
const error = (state: RootState) => state.activities.error;
const filters = (state: RootState) => state.activities.filters;

export const getActivityLoadingSelector = createSelector(loading, (item) => item);
export const getActivityDataSelector = createSelector(activities, (item) => item);
export const getActivityErrorSelector = createSelector(error, (item) => item);
export const getActivityFilterSelector = createSelector(filters, (item) => item);
