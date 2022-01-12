import React from "react";
import {NativeBaseProvider} from "native-base";
import RootRouter from "./routes";
import {Provider} from "react-redux";
import store from "./redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <RootRouter />
      </NativeBaseProvider>
    </Provider>
  );
}
