import React, { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import { TypePositionMain, TypePositionCross } from "../../utils/constants";

interface IHStack extends ViewProps {
  children: ReactNode;
  mainAlignment?: TypePositionMain;
  crossAlignment?: TypePositionCross;
  spacing?: number;
}

export default function HStack({
  children,
  crossAlignment,
  mainAlignment,
  spacing = 10,
  ...rest
}: IHStack) {
  return (
    <View
      {...rest}
      style={[
        rest.style,
        {
          flexDirection: "row",
          gap: spacing,
          justifyContent: mainAlignment,
          alignItems: crossAlignment,
        },
      ]}
    >
      {children}
    </View>
  );
}
