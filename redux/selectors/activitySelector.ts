import {RootState} from "../reducers";
import {createSelector} from "reselect";

const loading = (state: RootState) => state.activities.loading;
const activityState = (state: RootState) => state.activities; //temp
const activities = (state: RootState) => state.activities.activities;
const error = (state: RootState) => state.activities.error;

export const getActivityLoadingSelector = createSelector(loading, (item) => item);
export const getActivityStateSelector = createSelector(activityState, (item) => item); //temp
export const getActivityDataSelector = createSelector(activities, (item) => item);
export const getActivityErrorSelector = createSelector(error, (item) => item);
