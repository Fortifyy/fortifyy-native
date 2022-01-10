import {call, fork, put, takeLatest} from "redux-saga/effects";
import {UserActionsTypes} from "../../constants";
import {CreateUserRequestInterface, LoginUserRequestInterface, UserData} from "../../interface/userDataInterface";
import AuthService from "../../services/AuthService";
import {LoginResponse, UnAuthorizedFailureResponse} from "../../interface/AuthService";
import * as UserActions from "../actions/userActions";

/* Helpers */
function* createUser(action: CreateUserRequestInterface) {
  console.log("test", action);
}

function* loginUser({payload}: LoginUserRequestInterface) {
  yield put(UserActions.LoginUserStarted());
  try {
    const response: LoginResponse = yield call(AuthService.login, payload);
    if (response.statusCode === 202) {
      yield put(UserActions.loginUserSuccess(response.data.user));
    } else {
      yield put(UserActions.loginUserFailure(response.statusCode));
    }
  } catch (e) {
    yield put(UserActions.loginUserFailure(500));
  }
}

function* checkUser() {
  yield put(UserActions.checkCurrentUserStarted());
  try {
    const res: UserData | UnAuthorizedFailureResponse = yield call(AuthService.currentUser);
    if (!("statusCode" in res)) yield put(UserActions.checkCurrentUserSuccess(res));
    else
      yield put(UserActions.checkCurrentUserFailure());
  } catch (e) {
    yield put(UserActions.checkCurrentUserFailure());
  }
}

/* Watchers */

function* watchLoginUserRequest() {
  yield takeLatest(UserActionsTypes.InitiateLogin, loginUser);
}

function* watchCreateUserRequest() {
  yield takeLatest(UserActionsTypes.InitiateSignUp, createUser);
}

function* watchCheckCurrentUserRequest() {
  yield takeLatest(UserActionsTypes.CheckCurrentUser, checkUser);
}


const userSagas = [
  fork(watchCreateUserRequest),
  fork(watchLoginUserRequest),
  fork(watchCheckCurrentUserRequest),
];
export default userSagas;
