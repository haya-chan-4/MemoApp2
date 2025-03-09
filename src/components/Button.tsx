import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { router } from 'expo-router'

interface Props {
  label: string
  onPress?: () => void
  destination?: string
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress, destination } = props

  const handlePress = (): void => {
    if (destination) {
      router.push(destination)
    }
    if (onPress) {
      onPress()
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  label: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 24,
    color: '#ffffff'
  }
})

export default Button
