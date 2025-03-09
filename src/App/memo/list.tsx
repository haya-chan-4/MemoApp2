import { View, StyleSheet } from 'react-native'
import 'expo-router/entry'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import CircleButton from '../../components/CircleButton'
import MemoListItem from '../../components/MemoListItem'
import LogOutButton from '../../components/LogOutButton'

const handlePress = (): void => {
  router.push('/memo/create')
}
const logOut = (): void => {
  router.replace('/auth/log_in')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <LogOutButton onPress={logOut} />
        )
      }
    })
  }, [])
  return (
    <View style={styles.container}>
      {/* todo area */}
      <View>
        <MemoListItem title="やることリスト" date="2025年2月22日" iconName="trash-2" />
        <MemoListItem title="やることリスト" date="2025年2月22日" iconName="trash-2" />
        <MemoListItem title="やることリスト" date="2025年2月22日" iconName="trash-2" />
      </View>
      {/* todo area */}
      {/* button */}
      <CircleButton
        onPress={handlePress}
        iconName="plus"
        style={{
          backgroundColor: '#467fd3',
          right: 32,
          bottom: 40
        }}
      />
      {/* button */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  }
})

export default List
