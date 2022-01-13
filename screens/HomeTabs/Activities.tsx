import React, {useCallback, useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import ActivityCard from "../../components/ActivityCard";
import {Actionsheet, Box, Button, Heading, Icon, Spinner, useDisclose, useToast} from "native-base";
import EmptyComponent from "../../components/EmptyComponent";
import {VirtualizedList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getUserActivities, setUserActivityFilters} from "../../redux/actions/activityActions";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import moment from "moment";

import {
  getActivityDataSelector,
  getActivityErrorSelector,
  getActivityFilterSelector,
  getActivityLoadingSelector,
} from "../../redux/selectors/activitySelector";
import {UserActivityInterface} from "../../interface/activityInterface";
import {t} from "i18n-js";
import {ACTIVITY_TYPES} from "../../constants";


const Activities = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const filterDisclose = useDisclose();

  const activityData = useSelector(getActivityDataSelector);
  const activityError = useSelector(getActivityErrorSelector);
  const activityLoading = useSelector(getActivityLoadingSelector);
  const activityFilter = useSelector(getActivityFilterSelector);

  const [datePagination, setDatePagination] = useState(0);
  const [activityTypeFilter, setActivityTypeFilter] = useState<ACTIVITY_TYPES | undefined>(undefined);
  useEffect(() => {
    setActivityTypeFilter(undefined);
    dispatchGetUserActivities();
  }, [datePagination]);

  useEffect(() => {
    if (activityError)
      toast.show({
        title: activityError,
        status: "warning",
      });
  }, [activityError]);

  const dispatchGetUserActivities = useCallback(() => {
    dispatch(getUserActivities({
      date: datePagination,
    }));
  }, [dispatch, datePagination]);

  const EOAContainer = ({isEmpty = false, ...props}: any) => {
    const str = t("activity.paginateText");
    const buttonText = str.replace("$DAY$", datePagination > 0 ? moment().subtract(datePagination + 1, "days").format("Do MMM") : t("common.yesterdays"));
    return (
      <Box {...props}>
        {isEmpty && <Heading mb={7} mt={-10}>{t("activity.notFoundHeading")}</Heading>}
        <Button
          variant={isEmpty ? "subtle" : "ghost"}
          isLoading={activityLoading}
          isLoadingText={t("common.loading")}
          onPress={() => setDatePagination(prevState => (prevState + 1))}
        >{buttonText}</Button>
      </Box>
    );
  };

  const ListHeaderContainer = () => (
    <Button.Group shadow={2} bg={"light.50"} my={2} space={"lg"} colorScheme="light" variant="ghost">
      <Button
        leftIcon={<Icon as={AntDesign} name="filter" size={"sm"} />}
        rightIcon={<Icon as={AntDesign} name="caretdown" size={"2"} />}
        onPress={() => {
          filterDisclose.onOpen();
          dispatch(setUserActivityFilters());
          setActivityTypeFilter(undefined);
        }}
        variant={activityFilter ? "subtle" : "ghost"}
        colorScheme={activityFilter ? "secondary" : "light"}
      >{activityFilter ? activityFilter : "Filter"}</Button>
      <Button
        leftIcon={<Icon as={FontAwesome} name="calendar" size={"sm"} />}
        rightIcon={<Icon as={AntDesign} name="caretdown" size={"2"} />}
      >Date</Button>
      <Actionsheet isOpen={filterDisclose.isOpen} onClose={() => {
        filterDisclose.onClose();
        console.log(activityTypeFilter);
        dispatch(setUserActivityFilters(activityTypeFilter));
      }}>
        <Actionsheet.Content>
          {Object.values(ACTIVITY_TYPES).map((item, index) =>
            <Actionsheet.Item key={index} onPress={() => setActivityTypeFilter(item)}>
              {item}
            </Actionsheet.Item>,
          )}
        </Actionsheet.Content>
      </Actionsheet>
    </Button.Group>
  );

  if (activityLoading)
    return <Spinner size={"lg"} color={"indigo.500"} />;

  return (
    <SafeAreaView>
      <StatusBar style="auto" animated={true} translucent={true} />
      <VirtualizedList
        renderItem={({item}) => <ActivityCard cardData={item} />}
        data={activityData}
        getItem={(activityData: [UserActivityInterface], index: number) => activityData[index]}
        getItemCount={(data) => data.length}
        keyExtractor={(item) => item._id}// @ts-ignore
        ItemSeparatorComponent={() => <Box my={1} />}
        ListEmptyComponent={<EmptyComponent style={{marginTop: -50}}>
          <EOAContainer isEmpty />
        </EmptyComponent>}
        ListFooterComponent={activityData.length ? <EOAContainer my={3} /> : <Box mb={3} />}
        ListHeaderComponent={ListHeaderContainer}
        onRefresh={() => setDatePagination(0)}
        refreshing={activityLoading}
      />
    </SafeAreaView>
  );
};
export default Activities;
