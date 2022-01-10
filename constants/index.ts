export enum SCREEN_NAMES {
  Login = "Login",
  SignUp = "SignUp",
  DummyPage = "DummyPage"
}

export enum UserActionsTypes {
  GetCurrentUser = "GET_CURRENT_USER",
  InitiateLogin = "INITIATE_USER_LOGIN",
  LoginPending = "LOGIN_PENDING",
  LoginSuccess = "USER_LOGIN_SUCCESS",
  SignUpSuccess = "USER_SignUp_SUCCESS",
  SignUpFailure = "USER_SignUp_FAILURE",
  LoginFailure = "USER_LOGIN_FAILURE",
  InitiateSignUp = "INITIATE_USER_SIGNUP",
  CheckCurrentUserStarted = "CHECK_CURRENT_USER_STARTED",
  CheckCurrentUser = "CHECK_CURRENT_USER",
  CheckCurrentUserSuccess = "CHECK_CURRENT_USER_SUCCESS",
  CheckCurrentUserFailure = "CHECK_CURRENT_USER_FAILURE",
  Logout = "LOGOUT",
}

export const SECURE_STORE_KEYS = {
  UserToken: "user-token",
};
