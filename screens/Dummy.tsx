import React, {useCallback} from "react";
import {StyleSheet, View} from "react-native";
import {Button, StatusBar, Text} from "native-base";
import {useDispatch} from "react-redux";
import {checkCurrentUser} from "../redux/actions/userActions";
import AuthService from "../services/AuthService";

const Dummy = () => {
  const dispatch = useDispatch();

  const Something = useCallback(() => {
    dispatch(checkCurrentUser());
  }, [dispatch]);

  const SomethingElse = useCallback(() => {
    AuthService.destroySession().then(r => {
      console.log("session destroyed", r);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Text>Hello</Text>
      <Button onPress={Something}>Click me</Button>
      <View style={{margin: 10}} />
      <Button onPress={SomethingElse}>Destroy me</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default Dummy;
