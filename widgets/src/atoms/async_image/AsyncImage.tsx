import { IShape } from "../../utils/constants";
import { handleShapeEvent } from "../../utils/functions";
import { useState } from "react";
import {
  DimensionValue,
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import FastImage, { FastImageProps, ResizeMode } from "react-native-fast-image";

type Resize = "contain" | "center" | "cover" | "stretch";

type IAsyncImage = FastImageProps &
  ImageProps & {
    url: string;
    resize?: Resize;
    imageWidth?: DimensionValue;
    imageHeight?: DimensionValue;
    pathPlaceHolder?: ImageSourcePropType;
    stylePlaceHolder?: StyleProp<ImageStyle>;
    shape?: IShape;
    borderRadiusShape?: number;
  };

export default function AsyncImage({
  url,
  resize,
  imageWidth,
  imageHeight,
  pathPlaceHolder,
  stylePlaceHolder,
  shape,
  borderRadiusShape,
  ...rest
}: IAsyncImage) {
  const [isLoading, setIsLoading] = useState(true);

  function converterFastImageToResize(resize?: Resize): ResizeMode {
    const flag = {
      contain: FastImage.resizeMode.contain,
      center: FastImage.resizeMode.center,
      cover: FastImage.resizeMode.cover,
      stretch: FastImage.resizeMode.stretch,
    } as { [key: string]: ResizeMode };

    function returnResizeMode(value?: string) {
      return value !== undefined ? flag[value] : FastImage.resizeMode.cover;
    }

    return returnResizeMode(resize);
  }

  return pathPlaceHolder !== undefined && isLoading ? (
    <>
      <Image
        {...rest}
        style={stylePlaceHolder}
        source={pathPlaceHolder}
        resizeMode="contain"
      />
      <ImageRequest
        {...rest}
        url={url}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        resize={converterFastImageToResize(resize)}
        action={() => setIsLoading(false)}
      />
    </>
  ) : (
    <ImageRequest
      {...rest}
      url={url}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      resize={converterFastImageToResize(resize)}
      action={() => setIsLoading(false)}
      shape={shape}
      borderRadiusShape={borderRadiusShape}
    />
  );
}

interface IImageRequest extends FastImageProps {
  url: string;
  imageWidth?: DimensionValue;
  imageHeight?: DimensionValue;
  resize?: Resize;
  shape?: IShape;
  borderRadiusShape?: number;
  action: () => void;
}

const ImageRequest = ({
  url,
  imageHeight,
  imageWidth,
  action,
  resize,
  shape,
  borderRadiusShape,
  ...rest
}: IImageRequest) => {
  function handleBorderRadius(): number {
    const [refactorWidth, refactorHeight] = handleShapeEvent(
      (imageHeight as number) ?? 0,
      (imageWidth as number) ?? 0,
    );

    return (refactorWidth + refactorHeight) / 4;
  }

  return shape !== undefined ? (
    shape === "oval" ? (
      <FastImage
        {...rest}
        style={[
          {
            width: imageWidth,
            height: imageHeight,
            borderRadius: handleBorderRadius(),
            transform: [{ scaleX: 2 }],
          },
          rest.style,
        ]}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        onLoadEnd={action}
        resizeMode={resize}
      />
    ) : (
      <FastImage
        {...rest}
        style={[
          {
            width: imageWidth,
            height: imageHeight,
            borderRadius:
              shape === "rectangle" ? borderRadiusShape : handleBorderRadius(),
          },
          rest.style,
        ]}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        onLoadEnd={action}
        resizeMode={resize}
      />
    )
  ) : (
    <FastImage
      {...rest}
      style={[
        {
          width: imageWidth,
          height: imageHeight,
        },
        rest.style,
      ]}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
      }}
      onLoadEnd={action}
      resizeMode={resize}
    />
  );
};
