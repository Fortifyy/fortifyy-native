import React, {useCallback} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button, Circle, Icon, StatusBar} from "native-base";
import {useDispatch} from "react-redux";
import {checkCurrentUser} from "../redux/actions/userActions";
import AuthService from "../services/AuthService";
import authService from "../services/AuthService";
import {RootStackParamList} from "../interface/navigation";
import {SCREEN_NAMES} from "../constants";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MaterialIcons} from "@expo/vector-icons";

interface Props extends NativeStackScreenProps<RootStackParamList, SCREEN_NAMES.DummyPage> {
}

const Dummy: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const Something = useCallback(() => {
    dispatch(checkCurrentUser());
  }, [dispatch]);

  const SomethingElse = useCallback(() => {
    AuthService.destroySession().then(r => {
      console.log("session destroyed", r);
    });
  }, []);

  const SomethingMore = async () => {
    const token = await authService.getToken();
    console.log("Token haai?", token);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Text style={{fontFamily: "monospace"}}>Hello</Text>
      <Button onPress={Something}>Click me</Button>
      <View style={{margin: 10}} />
      <Button onPress={SomethingElse}>Destroy me</Button>
      <Button onPress={() => navigation.navigate(SCREEN_NAMES.HomeTab, {
        screen: "Community",
      })}>Go to Community</Button>
      <Button onPress={SomethingMore}>One More</Button>
      <Circle size={98} bg="secondary.400">
        <Icon as={<MaterialIcons name="audiotrack" />} color="white" size={8} />
      </Circle>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default Dummy;
