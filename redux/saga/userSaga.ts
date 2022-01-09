import {call, fork, put, takeLatest} from "redux-saga/effects";
import {UserActionsTypes} from "../../constants";
import {CreateUserRequestInterface, LoginUserRequestInterface} from "../../interface/userDataInterface";
import AuthService from "../../services/AuthService";
import {LoginResponse} from "../../interface/AuthService";
import * as UserActions from "../actions/userActions";


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

/* Watchers */

function* watchLoginUserRequest() {
  yield takeLatest(UserActionsTypes.InitiateLogin, loginUser);
}

function* watchCreateUserRequest() {
  yield takeLatest(UserActionsTypes.InitiateSignUp, createUser);
}


const userSagas = [
  fork(watchCreateUserRequest),
  fork(watchLoginUserRequest),
];
export default userSagas;
