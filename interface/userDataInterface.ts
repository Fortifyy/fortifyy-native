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
    signup: boolean
  },
  user: UserData | undefined,
  error: {
    login: number | null,
    signup: number | null
  },
}

export interface FetchUserSuccessPayload {
  token: string,
  user: UserData
}

export interface FetchUserFailurePayload {
  error: string;
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

export type UserActions =
  | CreateSignUpFailureInterface
  | CreateUserSuccessInterface
  | CreateUserRequestInterface
  | LoginUserRequestInterface
  | LoginUserFailureInterface
  | LoginUserSuccessInterface
  | LoginUserPendingInterface
