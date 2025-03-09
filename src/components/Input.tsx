import { StyleSheet, TextInput } from 'react-native'

interface Props {
  value: string,
}

const Input = (props: Props): JSX.Element => {
  const { value } = props
  return (
    <TextInput style={styles.input} value={value} />
  )
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    height: 48,
    padding: 8,
    fontSize: 16,
    opacity: 0.5,
    marginBottom: 16
  }
})
export default Input
