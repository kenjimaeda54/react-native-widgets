import {
  generatedStyleCommon,
  generatedStyleOval,
} from "../../utils/functions";
import { IShape } from "../../utils/constants";
import { ReactNode, useState } from "react";
import {
  StyleProp,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from "react-native";

interface IButtonProps extends TouchableWithoutFeedbackProps {
  children: ReactNode;
  shape?: IShape;
  borderRadiusShape?: number;
  styleContainer?: StyleProp<ViewStyle>;
}

export default function Button({
  children,
  shape,
  borderRadiusShape,
  styleContainer,
  ...props
}: IButtonProps) {
  const [style, setStyle] = useState<StyleProp<ViewStyle>>(styleContainer);

  return (
    <TouchableWithoutFeedback {...props}>
      <View
        style={style}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          const newStyle =
            shape !== "oval" && shape !== undefined
              ? generatedStyleCommon<ViewStyle>(
                  styleContainer,
                  shape,
                  width,
                  height,
                  borderRadiusShape,
                )
              : generatedStyleOval<ViewStyle>(
                  styleContainer,
                  "oval",
                  width,
                  height,
                  borderRadiusShape,
                );
          setStyle(newStyle);
        }}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}
