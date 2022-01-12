import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {HomeTabParamList} from "../interface/navigation";
import {SCREEN_NAMES} from "../constants";
import Activities from "../screens/HomeTabs/Activities";
import MyHome from "../screens/HomeTabs/MyHome";
import Community from "../screens/HomeTabs/Community";
import {t} from "i18n-js";
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {Icon, useTheme} from "native-base";

const HomeTabNav = createMaterialBottomTabNavigator<HomeTabParamList>();

const HomeNavigator = () => {
  const theme = useTheme();
  return (
    <HomeTabNav.Navigator
      initialRouteName="Activity"
      backBehavior="firstRoute"
      shifting={true}
      inactiveColor={theme.colors.warmGray["700"]}
      activeColor={theme.colors.rose["500"]}
      screenOptions={{
        tabBarColor: theme.colors.lightBlue["50"],
      }}
    >
      <HomeTabNav.Screen name={SCREEN_NAMES.Activity} component={Activities}
                         options={{
                           title: t("screens.activities"),
                           tabBarIcon: ({color, focused}) => <Icon
                             as={Ionicons}
                             color={color}
                             size={"sm"}
                             name={focused ? "time" : "time-outline"}
                           />,
                         }}
      />
      <HomeTabNav.Screen name={SCREEN_NAMES.MyHome} component={MyHome}
                         options={{
                           title: t("screens.myHome"),
                           tabBarIcon: ({color, focused}) => <Icon
                             as={Ionicons}
                             color={color}
                             size={"sm"}
                             name={focused ? "home" : "home-outline"}
                           />,
                         }}
      />
      <HomeTabNav.Screen name={SCREEN_NAMES.Community} component={Community}
                         options={{
                           title: t("screens.community"),
                           tabBarIcon: ({color, focused}) => <Icon
                             as={FontAwesome}
                             color={color}
                             size={"sm"}
                             name={focused ? "building" : "building-o"}
                           />,
                         }}
      />
    </HomeTabNav.Navigator>
  );
};
export default HomeNavigator;
