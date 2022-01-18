import {USER_ACTION_TYPES} from "../../constants";
import {UserActions, UserState} from "../../interface/userDataInterface";
import {Reducer} from "redux";

const initialState = {
  pending: {
    login: false,
    currentUser: false,
  },
  user: undefined,
  error: {
    login: null,
  },
};

const userReducer: Reducer<UserState, UserActions> = (state = initialState, action) => {
  switch (action.type) {
    /* Login Reducers */
    case USER_ACTION_TYPES.LoginPending:
      return {
        ...initialState,
        pending: {
          ...state.pending,
          login: true,
        },
      };
    case USER_ACTION_TYPES.LoginFailure:
      return {
        ...initialState,
        error: {
          ...state.error,
          login: action.payload,
        },
      };
    case USER_ACTION_TYPES.AuthSuccess:
      return {
        ...initialState,
        user: action.payload,
      };
    /*Current User Reducers*/
    case USER_ACTION_TYPES.CheckCurrentUserStarted:
      return {
        ...state,
        pending: {
          ...initialState.pending,
          currentUser: true,
        },
      };
    case USER_ACTION_TYPES.CheckCurrentUserFailure:
      return {...initialState};
    /* Default Case*/
    default:
      return {
        ...state,
      };
  }
};
export default userReducer;
