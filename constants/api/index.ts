export const BASE_URL = __DEV__ ? "http://192.168.0.109:5000/api/" : "https://fortifyy-server.herokuapp.com/api/";

export const API_ROUTES = {
  auth: {
    SignUpWithEmail: "auth/signup/with-email",
    LoginWithEmail: "auth/signin/with-email",
    CurrentUser: "auth/current-user",
  },
  activity: {
    userActivities: "activities/user-activities",
  },
};
