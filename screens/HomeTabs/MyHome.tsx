import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar, Divider, HStack, Icon, Pressable, Text, VStack} from "native-base";
import {StatusBar} from "expo-status-bar";
import {FontAwesome5} from "@expo/vector-icons";
import {t} from "i18n-js";
import HScrollVCard from "../../components/HScrollVCard";

const MyHome = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" animated={true} translucent={true} />
      <VStack mx={2} space={"md"}>
        <Pressable borderRadius="9" bg={"blue.50"} shadow={"3"} p={2} _pressed={{bg: "blue.900"}}>
          <VStack divider={<Divider mt={5} mb={2} />} justifyContent={"center"}>
            <HStack alignItems={"flex-start"} space={"xl"}>
              <Avatar size={"xl"}>TU</Avatar>
              <VStack mt={4}>
                <Text>User Name</Text>
                <Text sub color={"primary.500"}>#3234234234</Text>
              </VStack>
            </HStack>
            <HStack alignItems={"center"} space={"xl"} ml={2} my={2}>
              <Icon as={FontAwesome5} name="location-arrow" size={"xs"} />
              <Text>{t("myHome.shareAdder")}</Text>
            </HStack>
          </VStack>
        </Pressable>
        <HScrollVCard headerText={t("myHome.family")} />
        <HScrollVCard headerText={t("myHome.daily-help")} />
      </VStack>
    </SafeAreaView>
  )
    ;
};
export default MyHome;
