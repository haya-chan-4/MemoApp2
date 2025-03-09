import { View, Text, StyleSheet, TextInput } from 'react-native'
import Header from '../../components/Header'


const LogIn = (): JSX.Element  => {
  return (
    <View style={styles.container}>
      <Header title="MemoApp" />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value='email' />
        <TextInput style={styles.input} value='password' />
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>submit</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>not registered?</Text>
          <Text style={styles.footerLink}>sign up here</Text>
        </View>
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
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
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
  },
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
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3'
  }
})
export default LogIn
