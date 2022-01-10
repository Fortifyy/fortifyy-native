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
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/roboto";
import {checkCurrentUser, checkCurrentUserStarted} from "../redux/actions/userActions";
import AuthService from "../services/AuthService";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
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
  if (!fontsLoaded && pending.currentUser) return <AppLoading />;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {user ?
            <Stack.Group>
              <Stack.Screen name={SCREEN_NAMES.DummyPage} component={Dummy} />
            </Stack.Group>
            :
            <Stack.Group>
              <Stack.Screen name={SCREEN_NAMES.Login} component={Login} options={{headerShown: false}} />
              <Stack.Screen name={SCREEN_NAMES.SignUp} component={SignUp} options={{headerShown: false}} />
            </Stack.Group>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
