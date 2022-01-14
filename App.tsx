import React from "react";
import {NativeBaseProvider} from "native-base";
import RootRouter from "./routes";
import {Provider} from "react-redux";
import store from "./redux/store/store";
import * as Sentry from "sentry-expo";

export default function App() {
  Sentry.init({
    dsn: __DEV__ ? require("./constants/keys").SENTRY.DSN : process.env.SENTRY_DSN,
    enableInExpoDevelopment: true,
    debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  });
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <RootRouter />
      </NativeBaseProvider>
    </Provider>
  );
}
