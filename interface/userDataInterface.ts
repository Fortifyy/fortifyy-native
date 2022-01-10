import {UserActionsTypes} from "../constants";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface UserData {
  id: string,
  email: string,
  userType: string
}

export interface UserState {
  pending: {
    login: boolean,
    signup: boolean,
    currentUser: boolean
  },
  user: UserData | undefined,
  error: {
    login: number | null,
    signup: number | null
  },
}

export interface CreateUserRequestInterface {
  type: UserActionsTypes.InitiateSignUp,
  payload: any
}

export interface CreateUserSuccessInterface {
  type: UserActionsTypes.SignUpSuccess,
  payload: any
}

export interface CreateSignUpFailureInterface {
  type: UserActionsTypes.SignUpFailure,
  payload: any
}

/* LOGIN ACTIONS INTERFACE */

export interface LoginUserRequestInterface {
  type: UserActionsTypes.InitiateLogin,
  payload: LoginFormValues
}

export interface LoginUserPendingInterface {
  type: UserActionsTypes.LoginPending,
}

export interface LoginUserSuccessInterface {
  type: UserActionsTypes.LoginSuccess,
  payload: UserData
}

export interface LoginUserFailureInterface {
  type: UserActionsTypes.LoginFailure,
  payload: number
}

/* CURRENT USER ACTIONS INTERFACE */

export interface CheckCurrentUserInterface {
  type: UserActionsTypes.CheckCurrentUser;
}

export interface CheckCurrentUserStartedInterface {
  type: UserActionsTypes.CheckCurrentUserStarted;
}

export interface CheckCurrentUserSuccessInterface {
  type: UserActionsTypes.CheckCurrentUserSuccess;
  payload: UserData;
}

export interface CheckCurrentUserFailureInterface {
  type: UserActionsTypes.CheckCurrentUserFailure;
}

export type UserActions =
//Signup
  | CreateSignUpFailureInterface
  | CreateUserSuccessInterface
  | CreateUserRequestInterface
  //Login
  | LoginUserRequestInterface
  | LoginUserFailureInterface
  | LoginUserSuccessInterface
  | LoginUserPendingInterface
  //CurrentUser
  | CheckCurrentUserStartedInterface
  | CheckCurrentUserInterface
  | CheckCurrentUserSuccessInterface
  | CheckCurrentUserFailureInterface
