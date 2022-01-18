import React from "react";
import {Box, Button, Heading, HStack, Image, Pressable, Text, VStack} from "native-base";
import {MaterialBottomTabScreenProps} from "@react-navigation/material-bottom-tabs";
import {HomeTabParamList, RootStackParamList} from "../../interface/navigation";
import {SCREEN_NAMES} from "../../constants";
import {CompositeScreenProps} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {SafeAreaView} from "react-native-safe-area-context";
import {Dimensions} from "react-native";
import {t} from "i18n-js";
import {LocalServices, UserGroupOutline} from "../../assets/Svg";

interface Props extends CompositeScreenProps<MaterialBottomTabScreenProps<HomeTabParamList, SCREEN_NAMES.Community>, NativeStackScreenProps<RootStackParamList>> {
}

const {width} = Dimensions.get("window");

const Community: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Box mx={2}>
        <Heading>{t("community.title")}</Heading>
        <VStack space={"md"} mt={5}>
          <HStack w={width * (9 / 10)} space={"md"}>
            <Pressable borderRadius="9" bg={"blue.50"} shadow={"3"} p={2} w={"50%"}
                       _pressed={{bg: "blue.900"}} alignItems={"flex-start"}>
              <UserGroupOutline scaleY={3} scaleX={3} translateX={20} />
              <Heading size={"md"}>{t("community.residents.heading")}</Heading>
              <Text>Lorem ipsum dolor sit amet, blanditiis odit suscipit!</Text>
            </Pressable>
            <Pressable borderRadius="9" bg={"blue.50"} shadow={"3"} p={2} w={"50%"}
                       _pressed={{bg: "blue.900"}}>
              <LocalServices scaleY={0.7} scaleX={0.7} />
              <Heading size={"md"}>{t("community.daily-Help.heading")}</Heading>
              <Text>Lorem ipsum dolor sit amet, blanditiis odit suscipit!</Text>
            </Pressable>
          </HStack>
          <HStack w={width * (9 / 10)} space={"md"}>
            <Pressable borderRadius="9" bg={"blue.50"} shadow={"3"} p={2} w={"50%"}
                       _pressed={{bg: "blue.900"}}>
              <Image
                source={{uri: "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-emergency-alert-icongeek26-linear-colour-icongeek26.png"}}
                alt="emergency"
                size={"sm"} />
              <Heading size={"md"}>{t("community.emergency.heading")}</Heading>
              <Text>Lorem ipsum dolor sit amet, blanditiis odit suscipit!</Text>
            </Pressable>
            <Pressable borderRadius="9" bg={"blue.50"} shadow={"3"} p={2} w={"50%"}
                       _pressed={{bg: "blue.900"}}>
              <Image source={{uri: "https://img.icons8.com/color/48/000000/noticeboard.png"}} size={"sm"}
                     alt="notice" />
              <Heading size={"md"}>{t("community.notices.heading")}</Heading>
              <Text>Lorem ipsum dolor sit amet, blanditiis odit suscipit!</Text>
            </Pressable>
          </HStack>
        </VStack>
        <Button onPress={() => navigation.navigate(SCREEN_NAMES.DummyPage)}>To Dummy</Button>
      </Box>
    </SafeAreaView>
  );
};
export default Community;
