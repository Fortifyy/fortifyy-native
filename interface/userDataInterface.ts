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
    signup: string | null
  },
}

/* Signup Action Interface */

export interface CreateUserRequestInterface {
  type: UserActionsTypes.InitiateSignUp,
  payload: LoginFormValues
}

export interface CreateUserPendingInterface {
  type: UserActionsTypes.SignupPending,
}

export interface CreateSignUpFailureInterface {
  type: UserActionsTypes.SignUpFailure,
  payload: string
}

/* LOGIN ACTIONS INTERFACE */

export interface LoginUserRequestInterface {
  type: UserActionsTypes.InitiateLogin,
  payload: LoginFormValues
}

export interface LoginUserPendingInterface {
  type: UserActionsTypes.LoginPending,
}


export interface LoginUserFailureInterface {
  type: UserActionsTypes.LoginFailure,
  payload: number
}

export interface AuthSuccessInterface {
  type: UserActionsTypes.AuthSuccess,
  payload: UserData
}

/* CURRENT USER ACTIONS INTERFACE */

export interface CheckCurrentUserInterface {
  type: UserActionsTypes.CheckCurrentUser;
}

export interface CheckCurrentUserStartedInterface {
  type: UserActionsTypes.CheckCurrentUserStarted;
}

export interface CheckCurrentUserFailureInterface {
  type: UserActionsTypes.CheckCurrentUserFailure;
}

export type UserActions =
//Signup
  | CreateUserPendingInterface
  | CreateSignUpFailureInterface
  //Login
  | LoginUserFailureInterface
  | LoginUserPendingInterface
  //CurrentUser
  | CheckCurrentUserStartedInterface
  | CheckCurrentUserFailureInterface
  | AuthSuccessInterface
