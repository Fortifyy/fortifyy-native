import {
  getUserActivitiesFailureInterface,
  getUserActivitiesInterface,
  getUserActivitiesPendingInterface,
  getUserActivitiesSuccessInterface,
  UserActivityInterface,
} from "../../interface/activityInterface";
import {ACTIVITY_ACTION_TYPES} from "../../constants";

export const getUserActivities = (): getUserActivitiesInterface => ({
  type: ACTIVITY_ACTION_TYPES.GetUserActivities,
});
export const getUserActivitiesPending = (): getUserActivitiesPendingInterface => ({
  type: ACTIVITY_ACTION_TYPES.GetUserActivitiesPending,
});
//todo change any
export const getUserActivitiesSuccess = (data: [UserActivityInterface] | [] = []): getUserActivitiesSuccessInterface => ({
  type: ACTIVITY_ACTION_TYPES.GetUserActivitiesSuccess,
  payload: data,
});
export const getUserActivitiesFailure = (data?: string | undefined): getUserActivitiesFailureInterface => ({
  type: ACTIVITY_ACTION_TYPES.GetUserActivitiesFailure,
  payload: data,
});
