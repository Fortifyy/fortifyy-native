// In App.js in a new project

import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import {SafeAreaProvider} from "react-native-safe-area-context";
import SignUp from "../screens/auth/Signup";
import {SCREEN_NAMES} from "../constants";
import {RootStackParamList} from "../interface/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={SCREEN_NAMES.Login} component={Login} options={{headerShown: false}} />
          <Stack.Screen name={SCREEN_NAMES.SignUp} component={SignUp} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
