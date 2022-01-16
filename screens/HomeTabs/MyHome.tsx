import React, {useCallback, useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar, Divider, HStack, Icon, Pressable, Text, VStack} from "native-base";
import {StatusBar} from "expo-status-bar";
import {FontAwesome5} from "@expo/vector-icons";
import {t} from "i18n-js";
import HScrollVCard from "../../components/HScrollVCard";
import profileService from "../../services/UserService";
import {UserProfileData} from "../../interface/userDataInterface";
import arrayBufferToBase64 from "../../functions/arrayBufferToBase64";

const MyHome = () => {
  const [userData, setUserData] = useState<UserProfileData | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  // @ts-ignore
  const [errors, setErrors] = useState<string | undefined>(undefined);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = useCallback(async () => {
    setLoading(true);
    profileService.getProfile()
      .then((res: any) => {
        if (res.status !== 200)
          setErrors("Internal Server Error");
        else {
          setUserData(res.data);
          setErrors(undefined);
        }
      })
      .catch(() => setErrors("Internal Server Error"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Text>Loading</Text>;
  /*todo Swipe Down to Refresh*/
  return (
    <SafeAreaView>
      <StatusBar style="auto" animated={true} translucent={true} />
      <VStack mx={2} space={"md"}>
        <Pressable borderRadius="9" bg={"blue.50"} shadow={"3"} p={2} _pressed={{bg: "blue.900"}}>
          <VStack divider={<Divider mt={5} mb={2} />} justifyContent={"center"}>
            <HStack alignItems={"flex-start"} space={"xl"}>
              <Avatar source={{uri: "data:image/jpeg;base64," + arrayBufferToBase64(userData!.image.data)}}
                      size={"xl"} />
              <VStack mt={4}>
                <Text>{userData?.name}</Text>
                <Text sub color={"primary.500"}>{userData?.id}</Text>
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
