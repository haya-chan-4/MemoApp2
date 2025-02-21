import { View, Text } from 'react-native'
import 'expo-router/entry'
import Hello from '../components/Hello'


const Index = (): JSX.Element => {
  return (
    <View>
      <Text>text</Text>
      <Hello >World</Hello>
    </View>
  )
}
export default Index
