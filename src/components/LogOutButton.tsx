import {  Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { router } from 'expo-router'

interface Props {
  onPress: () => void
}

const LogOutButton = (props: Props): JSX.Element => {
  const { onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.logout}>ログアウト</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  logout: {
    color: '#ffffff',
    fontSize: 12,
    opacity: 0.7
  }
})
export default LogOutButton
