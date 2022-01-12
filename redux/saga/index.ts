import {all} from "redux-saga/effects";
import userSaga from "./userSaga";
import activitySaga from "./activitySaga";

export default function* rootSaga() {
  yield all([
    ...userSaga,
    ...activitySaga,
  ]);
}
