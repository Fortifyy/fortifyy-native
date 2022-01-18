export enum SCREEN_NAMES {
  Login = "Login",
  SignUp = "SignUp",
  CreateProfile = "CreateProfile",
  DummyPage = "DummyPage", //temp
  Activity = "Activity",
  MyHome = "My Home",
  Community = "Community",
  Profile = "Profile",
  HomeTab = "HomeTab"
}

export enum USER_ACTION_TYPES {
  GetCurrentUser = "GET_CURRENT_USER",
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
  GetMoreUserActivitiesSuccess = "GET_MORE_USER_ACTIVITIES_SUCCESS",
  SetUserActivityFilters = "setUserActivityFilters"
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

export enum OWNERSHIP_TYPES {
    Owner = 'Owner',
    Tenant = 'Tenant',
}
