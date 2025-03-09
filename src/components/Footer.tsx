import { View, Text, StyleSheet } from 'react-native'

interface Props {
  text: string,
  linkText: string,
}

const Footer = (props: Props): JSX.Element => {
  const { text, linkText } = props
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{text}</Text>
      <Text style={styles.footerLink}>{linkText}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
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
export default Footer
