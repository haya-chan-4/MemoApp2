import { View, StyleSheet } from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Footer from '../../components/Footer'
import AuthFormTitle from '../../components/AuthFormTitle'

const SignUp = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <AuthFormTitle title="Sign Up" />
        <Input value="email" />
        <Input value="password" />
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
