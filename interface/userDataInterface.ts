import {USER_ACTION_TYPES} from "../constants";

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

export interface UserProfileData {
  email: string;
  flat: string;
  id: string;
  image: {
    data: Buffer,
    type: string
  };
  mobileNum: number;
  name: string;
  userType: string;
  ownershipType: string;
}

/* Signup Action Interface */

export interface CreateUserRequestInterface {
  type: USER_ACTION_TYPES.InitiateSignUp,
  payload: LoginFormValues
}

export interface CreateUserPendingInterface {
  type: USER_ACTION_TYPES.SignupPending,
}

export interface CreateSignUpFailureInterface {
  type: USER_ACTION_TYPES.SignUpFailure,
  payload: string
}

/* LOGIN ACTIONS INTERFACE */

export interface LoginUserRequestInterface {
  type: USER_ACTION_TYPES.InitiateLogin,
  payload: LoginFormValues
}

export interface LoginUserPendingInterface {
  type: USER_ACTION_TYPES.LoginPending,
}


export interface LoginUserFailureInterface {
  type: USER_ACTION_TYPES.LoginFailure,
  payload: number
}

export interface AuthSuccessInterface {
  type: USER_ACTION_TYPES.AuthSuccess,
  payload: UserData
}

/* CURRENT USER ACTIONS INTERFACE */

export interface CheckCurrentUserInterface {
  type: USER_ACTION_TYPES.CheckCurrentUser;
}

export interface CheckCurrentUserStartedInterface {
  type: USER_ACTION_TYPES.CheckCurrentUserStarted;
}

export interface CheckCurrentUserFailureInterface {
  type: USER_ACTION_TYPES.CheckCurrentUserFailure;
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
