import { IShape } from "../../utils/constants";
import { ReactNode } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface ITextField extends TextInputProps {
  shape?: IShape;
  borderRadiusShape?: number;
  leading?: ReactNode;
  trailing?: ReactNode;
}

export default function TextField({
  shape,
  borderRadiusShape = 0,
  leading,
  trailing,
  ...rest
}: ITextField) {
  return (
    <View style={[style.container, rest.style]}>
      {leading}
      <TextInput {...rest} />
      {trailing}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
