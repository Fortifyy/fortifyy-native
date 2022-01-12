import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "native-base";

// todo Add 404 SVG and Styling
const EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Nothing Here</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default EmptyComponent;
