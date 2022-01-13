import {Reducer} from "redux";
import {ActivityActions, ActivityState} from "../../interface/activityInterface";
import {ACTIVITY_ACTION_TYPES} from "../../constants";

const initialState = {
  activities: [],
  loading: false,
  error: undefined,
  filters: undefined,
};
const activityReducer: Reducer<ActivityState, ActivityActions> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVITY_ACTION_TYPES.GetUserActivitiesPending:
      return {
        ...state,
        loading: true,
      };
    case ACTIVITY_ACTION_TYPES.GetUserActivitiesFailure:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ACTIVITY_ACTION_TYPES.GetUserActivitiesSuccess:
      return {
        filters: undefined,
        loading: false,
        activities: action.payload,
        error: undefined,
      };
    case ACTIVITY_ACTION_TYPES.GetMoreUserActivitiesSuccess:
      return {
        filters: undefined,
        loading: false,
        activities: state.activities.concat(action.payload),
        error: undefined,
      };
    case ACTIVITY_ACTION_TYPES.SetUserActivityFilters:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export default activityReducer;
