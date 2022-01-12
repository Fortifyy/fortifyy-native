import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import DummyActivities from "../../exclude/data/dummyActivities.json";
import ActivityCard from "../../components/ActivityCard";
import {UserActivityInterface} from "../../interface/activityInterface";
import {sanitizeUserActivityPayload} from "../../functions/sanitizePayload";
import {Box} from "native-base";
import EmptyComponent from "../../components/EmptyComponent";
import {VirtualizedList} from "react-native";

const getItem = (activityData: [UserActivityInterface], index: number) => {
  const activities = sanitizeUserActivityPayload(activityData);
  return activities[index];
};

const Activities = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" animated={true} translucent={true} />
      <VirtualizedList
        renderItem={({item}) => <ActivityCard cardData={item} />}
        data={DummyActivities}
        getItem={getItem}
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
