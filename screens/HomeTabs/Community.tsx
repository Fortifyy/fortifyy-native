import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Heading} from "native-base";
import {MaterialBottomTabScreenProps} from "@react-navigation/material-bottom-tabs";
import {HomeTabParamList, RootStackParamList} from "../../interface/navigation";
import {SCREEN_NAMES} from "../../constants";
import {CompositeScreenProps} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

interface Props extends CompositeScreenProps<MaterialBottomTabScreenProps<HomeTabParamList, SCREEN_NAMES.Community>, NativeStackScreenProps<RootStackParamList>> {
}

const Community: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Heading>Community</Heading>
      <Button onPress={() => {
        navigation.navigate(SCREEN_NAMES.DummyPage);
      }}> Go To Dummy Page</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default Community;
