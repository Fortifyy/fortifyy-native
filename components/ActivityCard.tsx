import React, {useEffect, useState} from "react";
import {Avatar, Badge, Divider, HStack, IBadgeProps, Icon, Pressable, Text, VStack} from "native-base";
import {Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, Octicons} from "@expo/vector-icons";
import {t} from "i18n-js";
import {ACTIVITY_STATUS, ACTIVITY_TYPES} from "../constants";
import {UserActivityInterface} from "../interface/activityInterface";
import {Linking} from "react-native";

interface Props {
  cardData: UserActivityInterface;
}
/*todo
*  Text Colors
*  Photos*/
const ActivityCard: React.FC<Props> = ({cardData}) => {
  const [colorScheme, setColorScheme] = useState<IBadgeProps["colorScheme"]>(undefined);
  const [statusIcon, setStatusIcon] = useState("");
  const [time, setTime] = useState<Date | undefined>(undefined);
  const [approval, setApproval] = useState<{text: string | undefined; approvedBy: string | undefined}>({
    text: undefined,
    approvedBy: undefined,
  });

  useEffect(() => {
    switch (cardData.status) {
      case ACTIVITY_STATUS.Denied:
        setColorScheme("danger");
        setStatusIcon("ios-alert-circle-outline");
        setTime(cardData.inTime);
        setApproval({
          text: t("activity.cardData.approval.reject"),
          approvedBy: cardData.allowedBy && cardData.allowedBy[0]?.name,
        });
        break;
      case ACTIVITY_STATUS.Inside:
        setColorScheme("success");
        setStatusIcon("enter-outline");
        setTime(cardData.inTime);
        setApproval({
          text: t("activity.cardData.approval.allowed"),
          approvedBy: cardData.allowedBy && cardData.allowedBy[0]?.name,
        });
        break;
      case ACTIVITY_STATUS.Pending:
        setColorScheme("warning");
        setStatusIcon("hourglass-outline");
        setTime(undefined);
        setApproval({
          approvedBy: undefined,
          text: t("activity.cardData.approval.pending"),
        });
        break;
      case ACTIVITY_STATUS.Left:
        setStatusIcon("exit-outline");
        setTime(cardData.outTime);
        setApproval({
          approvedBy: cardData.allowedBy && cardData.allowedBy[0]?.name,
          text: t("activity.cardData.approval.allowed"),
        });
        break;
      default:
        setColorScheme(undefined);
        setStatusIcon("alert");
        setTime(undefined);
        setApproval({
          approvedBy: undefined,
          text: t("activity.cardData.approval.pending"),
        });
    }
  }, [cardData]);

  return (
    <Pressable borderRadius="9" bg={"blue.50"} shadow={"3"} mx={"2"} pb={"10"} pr={"8"} _pressed={{bg: "blue.900"}}>
      <VStack space="4" left={"4"} top={"5"}>
        {/* Header */}
        <HStack space={"4"}>
          <Avatar backgroundColor="primary.500"
                  source={{uri: `https://gravatar.com/avatar/${cardData._id}?d=retro`}}>AC</Avatar>
          <VStack space={"2xs"}>
            <Text ml={"1"} fontSize={"md"}>
              {cardData.type === ACTIVITY_TYPES.DailyHelp ? cardData.dailyHelp?.name : cardData.type}
            </Text>
            <HStack alignItems={"center"} space={"xs"}>
              <Badge variant={"solid"} colorScheme={colorScheme} borderRadius={"99"} fontFamily={"monospace"}>
                <Text fontSize={"2xs"} fontFamily={"monospace"} color={"lightText"}>{cardData.status}</Text>
              </Badge>
              <Icon size={"xs"} as={Ionicons} name={statusIcon} />
              <Text fontSize={"xs"}>
                {time && new Date(time).toLocaleTimeString("en-IN", {timeStyle: "short"})}
              </Text>
              {cardData.dailyHelp &&
                <HStack alignItems={"center"} space={"xs"}>
                  <Icon size={"2"} as={Octicons} name="primitive-dot" mx={"-1"} />
                  <Text fontSize={"xs"} style={{textTransform: "uppercase"}}>
                    {cardData.dailyHelp.typeOfWork}
                  </Text>
                </HStack>
              }
            </HStack>
          </VStack>
        </HStack>
        {/* Body */}
        <VStack space={"2"}>
          {cardData.details && <HStack left={"1"} space={"2"} alignItems={"center"}>
            <Avatar size={"xs"}>tc</Avatar>
            <Text>{cardData.details.name}</Text>
            <Avatar size={"xs"}>tc</Avatar>
            <Text>{cardData.details.company}</Text>
            {cardData.details.carNumber && <HStack left={"1"} space={"2"} alignItems={"center"}>
              <Icon size={"2"} as={Octicons} name="primitive-dot" mx={"-1"} />
              <Text>{cardData.details.carNumber}</Text>
            </HStack>}
          </HStack>}
          <HStack ml={"2"} space={"2"} alignItems={"center"}>
            <Icon size={"xs"} as={Feather} name="user" />
            <Text>{approval.text} {approval.approvedBy}</Text>
          </HStack>
          {cardData.activityFor > 1 && cardData.status !== ACTIVITY_STATUS.Denied &&
            <HStack ml={"2"} space={"2"} alignItems={"center"}>
              <Icon size={"xs"} as={MaterialCommunityIcons} name="home-import-outline" />
              <Text>
                {`${t(cardData.status !== ACTIVITY_STATUS.Pending
                  ? "activity.cardData.delivery.1_1"
                  : "activity.cardData.delivery.1_2")
                }${cardData.activityFor}${t(cardData.activityFor > 2
                  ? "activity.cardData.delivery.2_2"
                  : "activity.cardData.delivery.2_1")
                }`}
              </Text>
            </HStack>
          }
        </VStack>
        {/* Footer */}
        <Divider thickness={"2"} px={"10"} />
        <HStack mt={"2"} ml={"2"} justifyContent={"space-evenly"} divider={<Divider thickness={"3"} />}>
          <Pressable
            onPress={() => Linking.openURL(`tel:+91${cardData.type === ACTIVITY_TYPES.DailyHelp ? cardData.dailyHelp?.phone : cardData.details?.number}`)}
          >
            <Icon size={"sm"} as={FontAwesome5} name="phone-alt" color={"emerald.500"} />
          </Pressable>
          <HStack space={"3"}>
            <Icon size={"sm"} as={MaterialCommunityIcons} name="cancel" />
            <Text>{t("activity.cardData.wrongEntry")}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Pressable>
  );
};
export default ActivityCard;
