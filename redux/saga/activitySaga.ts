import {call, fork, put, takeLatest} from "redux-saga/effects";
import {ACTIVITY_ACTION_TYPES} from "../../constants";
import * as ActivityActions from "../actions/activityActions";
import ActivityService from "../../services/ActivityService";
import {getUserActivitiesInterface, UserActivityInterface} from "../../interface/activityInterface";
import {t} from "i18n-js";


function* getUserActivities({payload}: getUserActivitiesInterface) {
  yield put(ActivityActions.getUserActivitiesPending());
  try {
    const response: {data: [UserActivityInterface]; status: number} = yield call(ActivityService.getActivities, payload);
    switch (response.status) {
      case 401:
        // yield put() todo logout user
        yield put(ActivityActions.getUserActivitiesFailure());
        break;
      case 200:
        if (payload.date === 0) yield put(ActivityActions.getUserActivitiesSuccess(response.data));
        else yield put(ActivityActions.getMoreUserActivitiesSuccess(response.data));
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
