import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#467fd3'
    },
    headerTintColor: '#ffffff',
    headerTitle: "MemoApp",
    headerBackTitle: "戻る",
    headerTitleStyle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fdfdfd'
    }

  }} />
}

export default Layout
