import {combineReducers} from "redux";
import userReducer from "./userReducer";
import activityReducer from "./activityReducer";

const rootReducer = combineReducers({
  users: userReducer,
  activities: activityReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
