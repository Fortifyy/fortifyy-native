export enum SCREEN_NAMES {
  Login = "Login",
  SignUp = "SignUp",
  DummyPage = "DummyPage"
}

export enum UserActionsTypes {
  GetCurrentUser = "GET_CURRENT_USER",
  InitiateSignUp = "INITIATE_USER_SIGNUP",
  SignupPending = "SIGNUP_PENDING",
  SignUpFailure = "USER_SignUp_FAILURE",
  InitiateLogin = "INITIATE_USER_LOGIN",
  LoginPending = "LOGIN_PENDING",
  LoginFailure = "USER_LOGIN_FAILURE",
  AuthSuccess = "AUTH_SUCCESS",
  CheckCurrentUserStarted = "CHECK_CURRENT_USER_STARTED",
  CheckCurrentUser = "CHECK_CURRENT_USER",
  CheckCurrentUserFailure = "CHECK_CURRENT_USER_FAILURE",
  Logout = "LOGOUT",
}

export const SECURE_STORE_KEYS = {
  UserToken: "user-token",
};
