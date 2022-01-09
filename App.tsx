import React, {useEffect} from "react";
import httpService from "./services/HttpService";
import {NativeBaseProvider} from "native-base";
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
import AppLoading from "expo-app-loading";
import RootRouter from "./routes";
import {Provider} from "react-redux";
import store from "./redux/store/store";


export default function App() {
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

  useEffect(() => {
    httpService.client.get("")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.status));
  }, []);

  if (!fontsLoaded) return <AppLoading />;
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <RootRouter />
      </NativeBaseProvider>
    </Provider>
  );
}
