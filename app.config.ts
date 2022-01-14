import {ConfigContext, ExpoConfig} from "@expo/config";

require("dotenv").config();

export default ({config}: ConfigContext): ExpoConfig => <ExpoConfig>({
  ...config,
  name: "My App",
  extra: {
    test: process.env.TEST,
    test2: "hello",
  },
  android: {
    package: "com.expo.sanchitb23.fortifyy-native",
  },
  ios: {
    bundleIdentifier: "com.expo.sanchitb23.fortifyy-native",
  },
  hooks: {
    postPublish: [
      {
        file: "sentry-expo/upload-sourcemaps",
        config: {
          organization: process.env.SENTRY_ORG,
          project: process.env.SENTRY_PROJECT,
          authToken: process.env.SENTRY_TOKEN,
        },
      },
    ],
  },
})
