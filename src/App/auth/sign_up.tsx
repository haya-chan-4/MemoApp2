import { View, StyleSheet } from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Footer from '../../components/Footer'
import AuthFormTitle from '../../components/AuthFormTitle'
import { useState } from 'react'

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <AuthFormTitle title="Sign Up" />
        <Input
          placeholder="email"
          keyboardType="email-address"
          value={email}
          secureTextEntry={false}
          onChangeText={(text: string) => {setEmail(text)}}
        />
        <Input
          placeholder="password"
          keyboardType="default"
          value={password}
          secureTextEntry
          onChangeText={(text: string) => {setPassword(text)}}
        />
        <Button
          label="submit"
          destination="/memo/list"
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
  }
})

export default SignUp
