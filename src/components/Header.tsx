import { View, Text, StyleSheet } from 'react-native'

interface Props {
  title: string,
  rightContent?: React.ReactNode
}

const Header = (props: Props): JSX.Element => {
  const { title, rightContent } = props
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerRight}>{rightContent}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#467fd3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: "rgba(255, 255, 255, 0.7)"
  },
  headerTitle: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#fdfdfd'
  }
})

export default Header
