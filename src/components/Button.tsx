import { Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  label: string
  onPress: () => void
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({

  buttonContainer: {
    backgroundColor: '#467fd3',
    borderRadius: 4,
    marginBottom: 24,
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 32,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 24
  }
})
export default Button
