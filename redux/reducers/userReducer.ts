import {UserActionsTypes} from "../../constants";
import {UserActions, UserState} from "../../interface/userDataInterface";
import {Reducer} from "redux";

const initialState = {
  pending: {
    login: false,
    signup: false,
  },
  user: undefined,
  error: {
    login: null,
    signup: null,
  },
};

const userReducer: Reducer<UserState, UserActions> = (state = initialState, action) => {
  switch (action.type) {
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
    case UserActionsTypes.LoginSuccess:
      console.log("LoginSuccess Reducer", action.payload);
      return {
        ...initialState,
        user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default userReducer;
