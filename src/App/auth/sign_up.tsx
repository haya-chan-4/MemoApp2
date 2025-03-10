import { View, StyleSheet, TextInput } from 'react-native'
// import { createUserWithEmailAndPassword } from 'firebase/auth'

import Button from '../../components/Button'
// import Input from '../../components/Input'
import Footer from '../../components/Footer'
import AuthFormTitle from '../../components/AuthFormTitle'
import { useState } from 'react'
// import { router } from 'expo-router'
// import { auth } from '../../config/firebase'

const handlePress = (email: string, password: string): void => {
  console.log(email)
  console.log(password)
}

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <AuthFormTitle title="Sign Up" />
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
        secureTextEntry={false}
        keyboardType='default'
        autoCapitalize="none"
        style={styles.input}
      />
        <Button
          label="Submit"
          onPress={() => {handlePress(email, password)}}
        />
        <Footer
          text="Already registered?"
          linkText="Log In here"
          link='/auth/log_in'
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

export default SignUp



// createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
  //   console.log(userCredential.user.uid)
  // }).catch((error) => {
  //   console.log(error)
  // })
