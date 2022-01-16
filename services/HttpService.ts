import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import * as SecureStore from "expo-secure-store";

class HttpService {
  client: AxiosInstance;
  unauthorizedCallback: () => void;

  constructor(options = {}) {
    this.client = axios.create(options);
    this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);
    this.unauthorizedCallback = () => {
    };
  }

  attachHeaders(headers: {}) {
    Object.assign(this.client.defaults.headers, headers);
  }

  removeHeaders(headerKeys: [string] | []) {
    headerKeys.length && headerKeys.forEach((key) => delete this.client.defaults.headers.common[key]);
  }

  handleSuccessResponse(response: AxiosResponse) {
    return {
      data: response.data,
      statusCode: response.status,
    };
  }

  handleErrorResponse = async (error: any) => {
    try {
      const {status} = error.response;
      switch (status) {
        case 401:
          //todo add keys of asyncStorage -> Expo Token for device Notifications
          await SecureStore.deleteItemAsync("jwt");
          this.unauthorizedCallback();
          break;
        default:
          break;
      }
      return Promise.reject(error.response);
    } catch (e) {
      return Promise.reject(error);
    }
  };

  setUnauthorizedCallback(callback: () => void) {
    this.unauthorizedCallback = callback;
  }
}

const options: AxiosRequestConfig = {
  baseURL: __DEV__ ? "http://192.168.0.109:5000/api/v1/" : process.env.API_URL,
  timeout: 5000,
};
const httpService = new HttpService(options);

export default httpService;
