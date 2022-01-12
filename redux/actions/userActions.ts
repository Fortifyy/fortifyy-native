import {
  AuthSuccessInterface,
  CheckCurrentUserFailureInterface,
  CheckCurrentUserInterface,
  CheckCurrentUserStartedInterface,
  CreateSignUpFailureInterface,
  CreateUserPendingInterface,
  CreateUserRequestInterface,
  LoginFormValues,
  LoginUserFailureInterface,
  LoginUserPendingInterface,
  LoginUserRequestInterface,
  UserData,
} from "../../interface/userDataInterface";
import {USER_ACTION_TYPES} from "../../constants";

/* SIGNUP */

export const createUserRequest = (data: LoginFormValues): CreateUserRequestInterface => ({
  type: USER_ACTION_TYPES.InitiateSignUp,
  payload: data,
});
export const createUserStarted = (): CreateUserPendingInterface => ({
  type: USER_ACTION_TYPES.SignupPending,
});

export const createSignUpFailure = (data: string): CreateSignUpFailureInterface => ({
  type: USER_ACTION_TYPES.SignUpFailure,
  payload: data,
});


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
