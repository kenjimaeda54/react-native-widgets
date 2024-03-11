import { TypeWeight } from "../../utils/constants";
import { ReactNode } from "react";
import { TextProps } from "react-native";
import { Text as TextReactNative } from "react-native";

interface IFont {
  size: number;
  weight: TypeWeight;
  height: number;
  family: string;
  color: string;
}

interface IText extends TextProps {
  children: ReactNode;
  font?: Partial<IFont>;
  lineLimit?: number;
}

export default function Text({ children, font, lineLimit, ...rest }: IText) {
  return (
    <TextReactNative
      {...rest}
      numberOfLines={lineLimit}
      style={[
        rest.style,
        {
          fontFamily: font?.family,
          fontSize: font?.size,
          fontWeight: font?.weight,
          lineHeight: font?.height,
          color: font?.color,
        },
      ]}
    >
      {children}
    </TextReactNative>
  );
}
