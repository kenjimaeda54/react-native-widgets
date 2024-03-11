import React, { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import { TypePositionMain, TypePositionCross } from "../../utils/constants";

interface IVStack extends ViewProps {
  children: ReactNode;
  mainAlignment?: TypePositionMain;
  crossAlignment?: TypePositionCross;
  spacing?: number;
}

export default function VStack({
  children,
  crossAlignment,
  mainAlignment,
  spacing = 10,
  ...rest
}: IVStack) {
  return (
    <View
      {...rest}
      style={[
        rest.style,
        {
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
