import { View } from "react-native";
import { AsyncImage } from "widgets";

export default function EAsyncImage() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    }}>

      <AsyncImage
        url="https://unsplash.it/400/400?image=1"
        imageHeight={100}
        imageWidth={100}
        pathPlaceHolder={require("../assets/teste.jpeg")}

      />
    </View>

  )
}