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
import {UserActionsTypes} from "../../constants";

/* SIGNUP */

export const createUserRequest = (data: LoginFormValues): CreateUserRequestInterface => ({
  type: UserActionsTypes.InitiateSignUp,
  payload: data,
});
export const createUserStarted = (): CreateUserPendingInterface => ({
  type: UserActionsTypes.SignupPending,
});

export const createSignUpFailure = (data: string): CreateSignUpFailureInterface => ({
  type: UserActionsTypes.SignUpFailure,
  payload: data,
});


/* LOGIN */

export const loginUserRequest = (data: LoginFormValues): LoginUserRequestInterface => ({
  type: UserActionsTypes.InitiateLogin,
  payload: data,
});

export const loginUserStarted = (): LoginUserPendingInterface => ({
  type: UserActionsTypes.LoginPending,
});


export const loginUserFailure = (data: number): LoginUserFailureInterface => ({
  type: UserActionsTypes.LoginFailure,
  payload: data,
});


/*  CURRENT USER  */

export const checkCurrentUser = (): CheckCurrentUserInterface => ({
  type: UserActionsTypes.CheckCurrentUser,
});

export const checkCurrentUserStarted = (): CheckCurrentUserStartedInterface => ({
  type: UserActionsTypes.CheckCurrentUserStarted,
});

export const checkCurrentUserFailure = (): CheckCurrentUserFailureInterface => ({
  type: UserActionsTypes.CheckCurrentUserFailure,
});

/* AUTH COMMON */

export const authSuccess = (data: UserData): AuthSuccessInterface => ({
  type: UserActionsTypes.AuthSuccess,
  payload: data,
});
