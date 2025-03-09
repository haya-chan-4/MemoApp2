import {  Text, StyleSheet } from 'react-native'

interface Props {
  title: string
}

const AuthFormTitle = (props: Props): JSX.Element => {
  const { title } = props
  return (
    <Text style={styles.title}>{title}</Text>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  }
})
export default AuthFormTitle
