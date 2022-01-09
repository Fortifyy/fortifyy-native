export enum SCREEN_NAMES {
  Login = "Login",
  SignUp = "SignUp",
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
  Logout = "LOGOUT",
}

export const SECURE_STORE_KEYS = {
  UserToken: "user-token",
};
