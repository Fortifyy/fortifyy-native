export enum SCREEN_NAMES {
  Login = "Login",
  SignUp = "SignUp",
  DummyPage = "DummyPage", //temp
  Activity = "Activity",
  MyHome = "My Home",
  Community = "Community",
  Profile = "Profile",
  HomeTab = "HomeTab"
}

export enum USER_ACTION_TYPES {
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

export enum ACTIVITY_ACTION_TYPES {
  GetUserActivities = "GET_USER_ACTIVITIES",
  GetUserActivitiesPending = "GET_USER_ACTIVITIES_PENDING",
  GetUserActivitiesSuccess = "GET_USER_ACTIVITIES_SUCCESS",
  GetUserActivitiesFailure = "GET_USER_ACTIVITIES_FAILURE",
}

export const SECURE_STORE_KEYS = {
  UserToken: "user-token",
};

export enum ACTIVITY_TYPES {
  Cab = "Cab",
  Delivery = "Delivery",
  Guest = "Guest",
  DailyHelp = "Daily-Help",
  Vehicle = "Vehicle",
  VisitingHelp = "Visiting-Help",
  Parcel = "Parcel",
  Others = "Others",
}

export enum ACTIVITY_STATUS {
  Inside = "Inside",
  Left = "Left",
  Denied = "Denied",
  Pending = "Pending",
}

export enum WORKER_TYPES {
  Maid = "Maid",
  Milkman = "Milkman",
  Laundry = "Laundry",
  Tuition = "Tuition",
  CarCleaner = "Car-Cleaner",
  Driver = "Driver",
}
