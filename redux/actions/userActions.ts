import {
  AuthSuccessInterface,
  CheckCurrentUserFailureInterface,
  CheckCurrentUserInterface,
  CheckCurrentUserStartedInterface,
  LoginFormValues,
  LoginUserFailureInterface,
  LoginUserPendingInterface,
  LoginUserRequestInterface,
  UserData,
} from "../../interface/userDataInterface";
import {USER_ACTION_TYPES} from "../../constants";

/* LOGIN */

export const loginUserRequest = (data: LoginFormValues): LoginUserRequestInterface => ({
  type: USER_ACTION_TYPES.InitiateLogin,
  payload: data,
});

export const loginUserStarted = (): LoginUserPendingInterface => ({
  type: USER_ACTION_TYPES.LoginPending,
});

export const loginUserFailure = (data: number): LoginUserFailureInterface => ({
  type: USER_ACTION_TYPES.LoginFailure,
  payload: data,
});

/*  CURRENT USER  */

export const checkCurrentUser = (): CheckCurrentUserInterface => ({
  type: USER_ACTION_TYPES.CheckCurrentUser,
});

export const checkCurrentUserStarted = (): CheckCurrentUserStartedInterface => ({
  type: USER_ACTION_TYPES.CheckCurrentUserStarted,
});

export const checkCurrentUserFailure = (): CheckCurrentUserFailureInterface => ({
  type: USER_ACTION_TYPES.CheckCurrentUserFailure,
});

/* AUTH COMMON */

export const authSuccess = (data: UserData): AuthSuccessInterface => ({
  type: USER_ACTION_TYPES.AuthSuccess,
  payload: data,
});
