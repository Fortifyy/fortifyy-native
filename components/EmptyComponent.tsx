import React from "react";
import {Center} from "native-base";
import {PageNotFound} from "../assets/Svg";
import {ViewProps} from "react-native";

const EmptyComponent: React.FC<ViewProps> = ({children, ...props}) => {
  return (
    <Center testID={"Empty-Comp-Center"}>
      <PageNotFound title="404" scaleY={.4} scaleX={.4} {...props} />
      {children}
    </Center>
  );
};
export default EmptyComponent;
