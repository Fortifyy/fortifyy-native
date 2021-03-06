import {NavigatorScreenParams} from "@react-navigation/native";

export type RootStackParamList = {
  Login: undefined,
  SignUp: undefined,
  CreateProfile: {
    email: string,
    password: string,
    userId: string
  },
  DummyPage: undefined,
  HomeTab: NavigatorScreenParams<HomeTabParamList>
}

export type HomeTabParamList = {
  Activity: undefined,
  "My Home": undefined,
  Community: undefined
}
