import {UserActionsTypes} from "../../constants";
import {UserActions, UserState} from "../../interface/userDataInterface";
import {Reducer} from "redux";

const initialState = {
  pending: {
    login: false,
    signup: false,
    currentUser: false,
  },
  user: undefined,
  error: {
    login: null,
    signup: null,
  },
};

const userReducer: Reducer<UserState, UserActions> = (state = initialState, action) => {
  switch (action.type) {
    /* Signup Reducers */
    case UserActionsTypes.SignupPending:
      return {
        ...initialState,
        pending: {
          ...initialState.pending,
          signup: true,
        },
      };
    case UserActionsTypes.SignUpFailure:
      return {
        ...initialState,
        error: {
          ...initialState.error,
          signup: action.payload,
        },
      };
    /* Login Reducers */
    case UserActionsTypes.LoginPending:
      return {
        ...initialState,
        pending: {
          ...state.pending,
          login: true,
        },
      };
    case UserActionsTypes.LoginFailure:
      return {
        ...initialState,
        error: {
          ...state.error,
          login: action.payload,
        },
      };
    case UserActionsTypes.AuthSuccess:
      return {
        ...initialState,
        user: action.payload,
      };
    /*Current User Reducers*/
    case UserActionsTypes.CheckCurrentUserStarted:
      return {
        ...state,
        pending: {
          ...initialState.pending,
          currentUser: true,
        },
      };
    case UserActionsTypes.CheckCurrentUserFailure:
      return {...initialState};
    /* Default Case*/
    default:
      return {
        ...state,
      };
  }
};
export default userReducer;
