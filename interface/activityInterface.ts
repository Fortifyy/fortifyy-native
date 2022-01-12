import {ACTIVITY_ACTION_TYPES, ACTIVITY_STATUS, ACTIVITY_TYPES, WORKER_TYPES} from "../constants";


export interface UserActivityInterface {
  _id: string,
  activityFor: number,
  allowedBy?: [{
    _id: string,
    name: string
  }] | undefined,
  dailyHelp?: {
    _id: string,
    photo?: any,
    name: string,
    phone: number,
    typeOfWork: WORKER_TYPES
  } | undefined,
  inTime?: Date | undefined,
  outTime?: Date | undefined,
  status: ACTIVITY_STATUS,
  type: ACTIVITY_TYPES,
  details?: {
    name: string | undefined,
    photo?: any | undefined,
    company: string | undefined,
    number: string | undefined,
    carNumber?: string | undefined
  } | undefined,
  reason?: string | undefined,
}

export interface ActivityState {
  activities: [UserActivityInterface] | any[],
  loading: boolean,
  error: string | undefined
}

export interface getUserActivitiesInterface {
  type: ACTIVITY_ACTION_TYPES.GetUserActivities;
}

export interface getUserActivitiesPendingInterface {
  type: ACTIVITY_ACTION_TYPES.GetUserActivitiesPending;
}

//todo change any
export interface getUserActivitiesSuccessInterface {
  type: ACTIVITY_ACTION_TYPES.GetUserActivitiesSuccess;
  payload: [UserActivityInterface] | [];
}

export interface getUserActivitiesFailureInterface {
  type: ACTIVITY_ACTION_TYPES.GetUserActivitiesFailure;
  payload: string | undefined;
}

export type ActivityActions =
  | getUserActivitiesPendingInterface
  | getUserActivitiesSuccessInterface
  | getUserActivitiesFailureInterface
