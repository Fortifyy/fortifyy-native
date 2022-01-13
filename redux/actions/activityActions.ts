import {
  getMoreUserActivitiesSuccessInterface,
  getUserActivitiesFailureInterface,
  getUserActivitiesFilterParams,
  getUserActivitiesInterface,
  getUserActivitiesPendingInterface,
  getUserActivitiesSuccessInterface,
  setUserActivityFiltersInterface,
  UserActivityInterface,
} from "../../interface/activityInterface";
import {ACTIVITY_ACTION_TYPES, ACTIVITY_TYPES} from "../../constants";

export const getUserActivities = (payload: getUserActivitiesFilterParams): getUserActivitiesInterface => ({
  type: ACTIVITY_ACTION_TYPES.GetUserActivities,
  payload,
});
export const getUserActivitiesPending = (): getUserActivitiesPendingInterface => ({
  type: ACTIVITY_ACTION_TYPES.GetUserActivitiesPending,
});
export const getUserActivitiesSuccess = (payload: [UserActivityInterface] | [] = []): getUserActivitiesSuccessInterface => ({
  type: ACTIVITY_ACTION_TYPES.GetUserActivitiesSuccess,
  payload,
});
export const getMoreUserActivitiesSuccess = (payload: [UserActivityInterface] | [] = []): getMoreUserActivitiesSuccessInterface => ({
  type: ACTIVITY_ACTION_TYPES.GetMoreUserActivitiesSuccess,
  payload,
});
export const getUserActivitiesFailure = (payload?: string | undefined): getUserActivitiesFailureInterface => ({
  type: ACTIVITY_ACTION_TYPES.GetUserActivitiesFailure,
  payload,
});
export const setUserActivityFilters = (payload?: ACTIVITY_TYPES): setUserActivityFiltersInterface => ({
  type: ACTIVITY_ACTION_TYPES.SetUserActivityFilters,
  payload,
});
