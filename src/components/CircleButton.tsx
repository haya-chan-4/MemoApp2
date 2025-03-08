import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native'

interface Props {
  label: string,
  color?: string,
  buttonStyle?: ViewStyle,
  labelStyle?: TextStyle,
  position?: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft' | 'center'
}

const CircleButton = (props: Props): JSX.Element => {
  const { label, color = '#467fd3', buttonStyle, labelStyle, position = 'bottomRight' } = props

  // ポジションに基づいたスタイルを設定
  const positionStyle = getPositionStyle(position)

  return (
    <View style={[
      styles.circleButton,
      { backgroundColor: color },
      positionStyle,
      buttonStyle
    ]}>
      <Text style={[styles.circleButtonLabel, labelStyle]}>{label}</Text>
    </View>
  )
}

// ポジションに基づいたスタイルを取得する関数
const getPositionStyle = (position: Props['position']): ViewStyle => {
  switch (position) {
    case 'bottomRight':
      return { right: 32, bottom: 32 }
    case 'bottomLeft':
      return { left: 32, bottom: 32 }
    case 'topRight':
      return { right: 32, top: 32 }
    case 'topLeft':
      return { left: 32, top: 32 }
    case 'center':
      return { alignSelf: 'center', position: 'relative', marginVertical: 32 }
    default:
      return { right: 32, bottom: 32 }
  }
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleButtonLabel: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 40
  }
})
export default CircleButton
