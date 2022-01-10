import {
  CheckCurrentUserFailureInterface,
  CheckCurrentUserInterface,
  CheckCurrentUserStartedInterface,
  CheckCurrentUserSuccessInterface,
  CreateSignUpFailureInterface,
  CreateUserRequestInterface,
  CreateUserSuccessInterface,
  LoginFormValues,
  LoginUserFailureInterface,
  LoginUserPendingInterface,
  LoginUserRequestInterface,
  LoginUserSuccessInterface,
  UserData,
} from "../../interface/userDataInterface";
import {UserActionsTypes} from "../../constants";

/* SIGNUP */

export const createUserRequest = (data: any): CreateUserRequestInterface => ({
  type: UserActionsTypes.InitiateSignUp,
  payload: data,
});

export const createUserSuccess = (data: any): CreateUserSuccessInterface => ({
  type: UserActionsTypes.SignUpSuccess,
  payload: data,
});
export const createSignUpFailure = (data: any): CreateSignUpFailureInterface => ({
  type: UserActionsTypes.SignUpFailure,
  payload: data,
});


/* LOGIN */

export const loginUserRequest = (data: LoginFormValues): LoginUserRequestInterface => ({
  type: UserActionsTypes.InitiateLogin,
  payload: data,
});

export const LoginUserStarted = (): LoginUserPendingInterface => ({
  type: UserActionsTypes.LoginPending,
});

export const loginUserSuccess = (data: UserData): LoginUserSuccessInterface => ({
  type: UserActionsTypes.LoginSuccess,
  payload: data,
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
export const checkCurrentUserSuccess = (payload: UserData): CheckCurrentUserSuccessInterface => ({
  type: UserActionsTypes.CheckCurrentUserSuccess,
  payload,
});
export const checkCurrentUserFailure = (): CheckCurrentUserFailureInterface => ({
  type: UserActionsTypes.CheckCurrentUserFailure,
});
