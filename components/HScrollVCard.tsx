import React from "react";
import {Avatar, Button, Circle, Divider, Heading, HStack, Icon, Pressable, ScrollView, Text, VStack} from "native-base";
import {FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import {Dimensions} from "react-native";
import {t} from "i18n-js";

const {width} = Dimensions.get("window");

interface Props {
  headerText: string;
}

const HScrollVCard: React.FC<Props> = ({
                                         headerText,
                                       }) => {
  return (
    <VStack space={"xs"}>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"xs"} ml={2} textTransform={"uppercase"}>{headerText}</Heading>
        <Button
          variant={"ghost"}
          leftIcon={<Icon as={MaterialIcons} name="add" size={"xs"} mr={-2} />}
          _text={{textTransform: "uppercase"}}
        >{t("common.add")}</Button>
      </HStack>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack space={"lg"} alignItems={"center"}>
          <Pressable
            borderRadius="9"
            bg={"blue.50"}
            shadow={"3"}
            p={3}
            _pressed={{bg: "blue.900"}}
            w={width / 3}>
            <VStack alignItems={"center"}>
              <Avatar size={"lg"}>TU</Avatar>
              <Text>User name</Text>
              <Text sub color={"primary.500"}>#3234234234</Text>
              <Divider px={2} my={2} />
              <HStack
                divider={<Divider thickness={2} />}
                mt={2}
                justifyContent={"center"}
                space={"md"}>
                <Icon as={FontAwesome5} name="phone-alt" size={"xs"} />
                <Icon as={FontAwesome5} name="share-alt" size={"xs"} />
              </HStack>
            </VStack>
          </Pressable>
          <Pressable>
            {({isPressed}) =>
              <Circle size={85}
                      borderColor={"red.200"}
                      rounded={"full"}
                      borderStyle={"dotted"}
                      bg={isPressed ? "red.200" : "#fff"}
                      borderWidth={"4"}>
                <Icon as={<MaterialIcons name="person-add-alt" />} color="red.200" size={8} />
              </Circle>}
          </Pressable>
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default HScrollVCard;
