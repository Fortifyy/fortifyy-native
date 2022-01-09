import React from "react";
import {Box, Center, Hidden, Image, Stack, StatusBar, Text, VStack} from "native-base";
import {SCREEN_NAMES} from "../../constants";
import {RootStackParamList} from "../../interface/navigation";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {SignUpForm} from "../../components/SignUpForm";


interface Props extends NativeStackScreenProps<RootStackParamList, SCREEN_NAMES.Login> {
}

const SignUp: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{bg: "primary.900"}}
        _dark={{bg: "coolGray.900"}}
      />
      <Center
        my="auto"
        _dark={{bg: "coolGray.900"}}
        _light={{bg: "primary.900"}}
        flex="1"
      >
        <Stack
          flexDirection={{base: "column", md: "row"}}
          w="100%"
          maxW={{md: "1016px"}}
          flex={{base: "1", md: "none"}}
        >
          <Hidden from="md">
            <VStack px="4" mt="4" mb="5" space="9">
              <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
                Welcome
              </Text>
              <Text
                fontSize="md"
                fontWeight="normal"
                _dark={{
                  color: "coolGray.400",
                }}
                _light={{
                  color: "primary.300",
                }}
              >
                Sign up to continue
              </Text>
            </VStack>
          </Hidden>
          <Hidden till="md">
            <Center
              flex="1"
              bg="primary.700"
              borderTopLeftRadius={{base: "0", md: "xl"}}
              borderBottomLeftRadius={{base: "0", md: "xl"}}
            >
              <Image
                h="24"
                size="80"
                alt="Fortifyy Logo"
                resizeMode={"contain"}
                source={require("../../assets/gate.png")}
              />
            </Center>
          </Hidden>
          <SignUpForm navigation={navigation} />
        </Stack>
      </Center>
    </>
  );
};

export default SignUp;
