import { TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native'
import { Feather } from '@expo/vector-icons'

interface Props {
  iconName: keyof typeof Feather.glyphMap,
  style?: ViewStyle,
  onPress?: () => void
}

const CircleButton = (props: Props): JSX.Element => {
  const { iconName, style, onPress } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.circleButton,
        style
      ]}>
      <Feather name={iconName} size={40} color="#ffffff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467fd3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 32,
    bottom: 32,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  }
})
export default CircleButton
