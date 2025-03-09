import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

interface Props {
  text: string,
  linkText: string,
  link: string,
}

const Footer = (props: Props): JSX.Element => {
  const { text, linkText, link } = props
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{text}</Text>
      <Link href={link} asChild>
        <TouchableOpacity>
          <Text style={styles.footerLink}>{linkText}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}
const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
