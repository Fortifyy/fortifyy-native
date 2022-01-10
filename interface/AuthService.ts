import {UserData} from "./userDataInterface";

export interface LoginSuccessResponse {
  data: {
    token: string,
    user: UserData
  },
  statusCode: 202
}

export interface LoginFailureResponse {
  error?: string,
  message: string,
  statusCode: 404 | 406
}

export interface UnAuthorizedFailureResponse {
  error?: string,
  message: string,
  statusCode: 401
}

export type LoginResponse =
  | LoginSuccessResponse
  | LoginFailureResponse
