import React, {useEffect} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import ActivityCard from "../../components/ActivityCard";
import {Box, Spinner, useToast} from "native-base";
import EmptyComponent from "../../components/EmptyComponent";
import {VirtualizedList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getUserActivities} from "../../redux/actions/activityActions";
import {
  getActivityDataSelector,
  getActivityErrorSelector,
  getActivityLoadingSelector,
} from "../../redux/selectors/activitySelector";
import {UserActivityInterface} from "../../interface/activityInterface";


const Activities = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const activityData = useSelector(getActivityDataSelector);
  const activityError = useSelector(getActivityErrorSelector);
  const activityLoading = useSelector(getActivityLoadingSelector);

  useEffect(() => {
    dispatch(getUserActivities());
  }, [dispatch]);

  useEffect(() => {
    if (activityError)
      toast.show({
        title: activityError,
        status: "warning",
      });
  }, [activityError]);

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
        ListEmptyComponent={<EmptyComponent />}
        ListFooterComponent={<Box mb={3} />}
        ListHeaderComponent={<Box mb={3} />}
      />
    </SafeAreaView>
  );
};
export default Activities;
