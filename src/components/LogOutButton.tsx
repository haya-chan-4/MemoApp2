import {  Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { router } from 'expo-router'
import { signOut } from '@firebase/auth'
import { auth } from '../config/firebase'
interface Props {}

const handlePress = (): void => {
  signOut(auth)
  .then(() => {
    router.replace('/auth/log_in')
    console.log('ログアウトしました')
  })
  .catch((error) => {
    console.log(error)
    Alert.alert('ログアウトに失敗しました')
  })
}

const LogOutButton = (props: Props): JSX.Element => {
  const {  } = props
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.logout}>ログアウト</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    padding: 10,
    borderRadius: 5,
    marginRight: 10
  },
  logout: {
    color: '#ffffff',
    fontSize: 16,
    opacity: 0.7
  }
})
export default LogOutButton
