import * as React from "react";
import {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import {SafeAreaProvider} from "react-native-safe-area-context";
import SignUp from "../screens/auth/Signup";
import {SCREEN_NAMES} from "../constants";
import {RootStackParamList} from "../interface/navigation";
import Dummy from "../screens/Dummy";
import {useDispatch, useSelector} from "react-redux";
import {getPendingSelector, getUserSelector} from "../redux/selectors/userSelector";
import AppLoading from "expo-app-loading";
import {checkCurrentUser, checkCurrentUserStarted} from "../redux/actions/userActions";
import AuthService from "../services/AuthService";
import HomeNavigator from "./Home";
import CreateProfile from "../screens/auth/CreateProfile";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const pending = useSelector(getPendingSelector);
  const user = useSelector(getUserSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(checkCurrentUserStarted());
      await AuthService.init();
      dispatch(checkCurrentUser());
    })();
  }, []);

  if (pending.currentUser) return <AppLoading />;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {user ?
            <Stack.Group>
              <Stack.Screen name={SCREEN_NAMES.HomeTab} component={HomeNavigator} options={{headerShown: false}} />
              <Stack.Screen name={SCREEN_NAMES.DummyPage} component={Dummy} />
            </Stack.Group>
            :
            <Stack.Group>
              <Stack.Screen name={SCREEN_NAMES.Login} component={Login} options={{headerShown: false}} />
              <Stack.Screen name={SCREEN_NAMES.SignUp} component={SignUp} options={{headerShown: false}} />
              <Stack.Screen name={SCREEN_NAMES.CreateProfile}
                            component={CreateProfile}
                            options={{headerShown: false}} />
            </Stack.Group>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
