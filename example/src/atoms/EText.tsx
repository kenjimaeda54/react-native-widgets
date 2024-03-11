import { View } from "react-native"
import { Text } from "widgets"

export default function EText() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text font={{
        family: 'ProtestRevolution-Regular',
        weight: '700',
        color: 'pink',
        size: 30
      }} lineLimit={3}>
        Esses widgets sao muitos legais,este suporta ate 3 linhas. Esses widgets sao muitos legais,este suporta ate 3 linhas. Esses widgets sao muitos legais,este suporta ate 3 linhas.
      </Text>
    </View>

  )
}