import {call, fork, put, takeLatest} from "redux-saga/effects";
import {ACTIVITY_ACTION_TYPES} from "../../constants";
import * as ActivityActions from "../actions/activityActions";
import ActivityService from "../../services/ActivityService";
import {UserActivityInterface} from "../../interface/activityInterface";
import {t} from "i18n-js";


function* getUserActivities() {
  yield put(ActivityActions.getUserActivitiesPending());
  try {
    const response: {data: [UserActivityInterface]; status: any} = yield call(ActivityService.getActivities);
    switch (response.status) {
      case 401:
        // yield put() todo logout user
        yield put(ActivityActions.getUserActivitiesFailure());
        break;
      case 200:
        yield put(ActivityActions.getUserActivitiesSuccess(response.data));
        break;
      default:
        yield put(ActivityActions.getUserActivitiesFailure(t("error.somethingWrong")));
    }
  } catch (e) {

  }
}

function* watchGetUserActivities() {
  yield takeLatest(ACTIVITY_ACTION_TYPES.GetUserActivities, getUserActivities);
}

const activitySagas = [
  fork(watchGetUserActivities),
];
export default activitySagas;
