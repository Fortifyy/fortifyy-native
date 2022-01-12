import ApiService from "./ApiService";
import * as SecureStore from "expo-secure-store";
import {SECURE_STORE_KEYS} from "../constants";
import {API_ROUTES} from "../constants/api";
import {LoginFormValues} from "../interface/userDataInterface";
import {LoginFailureResponse, LoginSuccessResponse} from "../interface/AuthService";
import {AxiosResponse} from "axios";


class AuthService extends ApiService {
  /*Constructor and Init*/
  constructor() {
    super();
    this.init().then(() => console.log("Auth Service Initialized"));
  }

  init = async () => {
    const token = await this.getToken();
    const user = await this.getUser();

    if (token && user) {
      await this.setAuthorizationHeader();
    }
    this.api.setUnauthorizedCallback(this.destroySession.bind(this));
  };

  /*Helper Functions*/

  getToken = async (): Promise<string | undefined> => {
    const user = await SecureStore.getItemAsync(SECURE_STORE_KEYS.UserToken);
    return user ? JSON.parse(user).token : undefined;
  };

  getUser = async () => {
    const user = await SecureStore.getItemAsync(SECURE_STORE_KEYS.UserToken);
    return user ? JSON.parse(user) : undefined;
  };

  setAuthorizationHeader = async () => {
    const token = await this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };

  createSession = async (user: any) => {
    await SecureStore.setItemAsync(SECURE_STORE_KEYS.UserToken, JSON.stringify(user));
    await this.setAuthorizationHeader();
    //todo Notification Service
    // const expoPushToken = await askForNotificationsPermission();
    // if (expoPushToken) {
    //   await AsyncStorage.setItem('expoPushToken', expoPushToken);
    // TODO this token need to be saved on BE
    // notificationService.sendExpoTokenToServer(expoPushToken);
    // }
  };

  destroySession = async () => {
    console.log("[[AuthService]] Session Data Destroyed");
    await SecureStore.deleteItemAsync(SECURE_STORE_KEYS.UserToken); //todo add keys of asyncStorage -> Expo Token for device Notifications
    this.api.removeHeaders(["Authorization"]);
  };

  /* API Handlers */

  login = (loginData: LoginFormValues): Promise<AxiosResponse<LoginSuccessResponse | LoginFailureResponse>> => {
    return this.apiClient.post(API_ROUTES.auth.LoginWithEmail, loginData).then(async (res) => {
      await this.createSession({userId: res.data.user.id, token: res.data.token});
      return res;
    }).catch((error) => {
      return error.data;
    });
  };

  logout = async () => {
    await this.destroySession();
    return "Logout";
  };

  currentUser = () => {
    return this.apiClient.get(API_ROUTES.auth.CurrentUser)
      .then((res) => {
        return {
          id: res.data.userId,
          email: res.data.email,
          userType: res.data.userType,
        };
      })
      .catch((reason) => {
        return reason.data;
      });
  };

  signup = (signupData: LoginFormValues) => {
    return this.apiClient.post(API_ROUTES.auth.SignUpWithEmail, signupData)
      .then(() => {
        return this.login(signupData);
      })
      .catch((reason) => {
        return reason.data;
      });
  };
  /*  forgotPassword = data => this.apiClient.post(api.auth.FORGOT_PASSWORD, data);

    resetPassword = data => this.apiClient.post(api.auth.RESET_PASSWORD, data);*/


  /*  updateUserInStorage = async property => {
      const user = await AsyncStorage.getItem("user");
      let jsonUser = JSON.parse(user);
      jsonUser = {...jsonUser, ...property};
      AsyncStorage.setItem("user", JSON.stringify(jsonUser));
    };*/
}

const authService = new AuthService();

export default authService;

