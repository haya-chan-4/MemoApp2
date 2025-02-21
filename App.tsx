import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import Hello from './src/components/Hello'

const App = () :JSX.Element => {
  return (
    <View style={styles.container}>
      <Hello bang style={{ fontSize:30}}>World</Hello>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#df42',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
