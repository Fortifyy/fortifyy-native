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
  message: string | string[],
  statusCode: 404 | 406 | 400
}

export interface UnAuthorizedFailureResponse {
  error?: string,
  message: string,
  statusCode: 401
}

export interface SignUpResponse {
  data: string | object,
  status: number
}

export type LoginResponse =
  | LoginSuccessResponse
  | LoginFailureResponse
