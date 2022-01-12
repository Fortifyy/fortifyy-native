import {call, fork, put, takeLatest} from "redux-saga/effects";
import {USER_ACTION_TYPES} from "../../constants";
import {CreateUserRequestInterface, LoginUserRequestInterface, UserData} from "../../interface/userDataInterface";
import AuthService from "../../services/AuthService";
import {LoginResponse, UnAuthorizedFailureResponse} from "../../interface/AuthService";
import * as UserActions from "../actions/userActions";
import {t} from "i18n-js";

/* Helpers */

function* createUser(action: CreateUserRequestInterface) {
  yield put(UserActions.createUserStarted());
  try {
    const response: LoginResponse = yield call(AuthService.signup, action.payload);
    if (response.statusCode === 202) {
      yield put(UserActions.authSuccess(response.data.user));
    } else {
      let message = Array.isArray(response.message) ? response.message[0] : response.message;
      yield put(UserActions.createSignUpFailure(message));
    }
  } catch (e) {
    yield put(UserActions.createSignUpFailure(t("error.serverError")));
  }
}

function* loginUser({payload}: LoginUserRequestInterface) {
  yield put(UserActions.loginUserStarted());
  try {
    const response: LoginResponse = yield call(AuthService.login, payload);
    if (response.statusCode === 202) {
      yield put(UserActions.authSuccess(response.data.user));
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
    if (!("statusCode" in res)) yield put(UserActions.authSuccess(res));
    else
      yield put(UserActions.checkCurrentUserFailure());
  } catch (e) {
    yield put(UserActions.checkCurrentUserFailure());
  }
}

/* Watchers */

function* watchLoginUserRequest() {
  yield takeLatest(USER_ACTION_TYPES.InitiateLogin, loginUser);
}

function* watchCreateUserRequest() {
  yield takeLatest(USER_ACTION_TYPES.InitiateSignUp, createUser);
}

function* watchCheckCurrentUserRequest() {
  yield takeLatest(USER_ACTION_TYPES.CheckCurrentUser, checkUser);
}


const userSagas = [
  fork(watchCreateUserRequest),
  fork(watchLoginUserRequest),
  fork(watchCheckCurrentUserRequest),
];
export default userSagas;
