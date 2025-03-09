import { View, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
interface Props {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  secureTextEntry?: boolean
  keyboardType?: 'default' | 'email-address' | 'numeric'
}

const Input = (props: Props): JSX.Element => {
  const [value, setValue] = useState(props.value)
  const {
    placeholder,
    secureTextEntry,
    keyboardType = 'default'
  } = props

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={(text: string) => {
          setValue(text)
        }}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        style={styles.input}
      />
    </View>
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
