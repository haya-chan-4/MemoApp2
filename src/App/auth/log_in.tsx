import { View, StyleSheet, TextInput, Alert } from 'react-native'
import { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Footer from '../../components/Footer'
import AuthFormTitle from '../../components/AuthFormTitle'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { router } from 'expo-router'

const handlePress = (email: string, password: string): void => {
  console.log(email)
  console.log(password)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential.user.uid)
    router.replace('/memo/list')
  })
  .catch((error) => {
    const { code, message } = error
    console.log(code)
    console.log(message)
    Alert.alert('正しいメールアドレスとパスワードを入力してください')
  })
}

const LogIn = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <AuthFormTitle title="Log In" />
        <TextInput
          value={email}
          onChangeText={(text: string) => {
            setEmail(text)
          }}
          placeholder="Email"
          secureTextEntry={false}
          keyboardType='email-address'
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(text: string) => {
            setPassword(text)
          }}
          placeholder="password"
          secureTextEntry={true}
          keyboardType='default'
          autoCapitalize="none"
          style={styles.input}
        />
        <Button
          label="Submit"
          onPress={() => { handlePress(email, password) }}
        />
        <Footer
          text="Not registered"
          linkText="Sign Up here"
          link='/auth/sign_up'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fdf9'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
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

export default LogIn
