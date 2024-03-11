import { Image, View } from "react-native";
import { TextField } from "widgets";


export default function ETextField() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

      }}
    >
      <TextField
        shape="circle"
        leading={<Image style={{
          width: 20,
          height: 20,
        }} source={require("../assets/profile.jpeg")} />}
        style={{
          width: 100,
          height: 30,
          backgroundColor: "black"
        }}
      />
    </View>
  );
}