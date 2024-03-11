import { Text, View } from "react-native"
import { VStack } from "widgets"


export default function EVStack() {

  return (
    <VStack
      crossAlignment="flex-end"
      mainAlignment="space-around"
      style={{
        height: 400,
        width: "100%",
        marginTop: 100,
        backgroundColor: "pink",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          height: 100,
          width: 80,
        }}
      />
      <View
        style={{
          backgroundColor: "blue",
          height: 100,
          width: 80
        }}
      />

    </VStack>
  )

}