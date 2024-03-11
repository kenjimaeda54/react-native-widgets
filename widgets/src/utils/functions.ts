import { AnimatableNumericValue, StyleProp } from "react-native";
import { IShape } from "./constants";

export function generatedStyleOval<T>(
  style: StyleProp<T>,
  typeShape: IShape,
  width: number | undefined,
  height: number | undefined,
  borderRadius: number | undefined,
) {
  return [
    {
      borderRadius: _handleShapeComponent(
        typeShape,
        width,
        height,
        borderRadius ?? 0,
      ),
      width: width,
      height: height,
      transform: [{ scaleX: 2 }],
    },
    style,
  ];
}

export function generatedStyleCommon<T>(
  style: StyleProp<T>,
  typeShape: IShape,
  width: number | undefined,
  height: number | undefined,
  borderRadius: number | undefined,
) {
  return [
    {
      borderRadius: _handleShapeComponent(
        typeShape,
        width,
        height,
        borderRadius ?? 0,
      ),
      width: width,
      height: height,
    },
    style,
  ];
}

function _handleShapeComponent(
  typeShape: String,
  width: number | undefined,
  height: number | undefined,
  borderRadius: number,
): AnimatableNumericValue {
  const [refactorWidth, refactorHeight] = handleShapeEvent(
    width ?? 0,
    height ?? 0,
  );

  switch (typeShape) {
    case "circle":
      return (refactorWidth + refactorHeight) / 4;
      break;

    case "oval":
      return (refactorWidth + refactorHeight) / 4;
      break;

    default:
      return borderRadius;
  }
}

export function handleShapeEvent(
  width: number,
  height: number,
): [number, number] {
  if (width > height) {
    const rest = width - height;
    return [width, height + rest];
  }
  const rest = height - width;
  return [width + rest, height];
}
