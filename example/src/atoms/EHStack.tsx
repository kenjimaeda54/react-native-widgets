import { Text, View } from "react-native"
import { HStack } from "widgets"


export default function EHStack() {

  return (
    <HStack
      crossAlignment="stretch"
      mainAlignment="space-evenly"
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

    </HStack>
  )

}