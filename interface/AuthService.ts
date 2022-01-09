export interface LoginSuccessResponse {
  data: {
    token: string,
    user: {
      email: string,
      id: string,
      userType: string
    }
  },
  statusCode: 202
}

export interface LoginFailureResponse {
  error?: string,
  message: string,
  statusCode: 404 | 406
}

export type LoginResponse =
  | LoginSuccessResponse
  | LoginFailureResponse
