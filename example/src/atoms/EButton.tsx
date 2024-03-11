import { View } from "react-native";
import { Text, Button } from "widgets";


export default function EButton() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    }}>
      <Button
        shape="oval"
        onPress={() => console.log("Is great")}
        styleContainer={{
          width: 40,
          height: 40,
          borderColor: "black",
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Ola</Text>
      </Button>
    </View>
  )
}