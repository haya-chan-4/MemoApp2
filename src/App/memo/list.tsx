import { View, StyleSheet, TextInputEndEditingEventData, FlatList } from 'react-native'
// import 'expo-router/entry'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import CircleButton from '../../components/CircleButton'
import MemoListItem from '../../components/MemoListItem'
import LogOutButton from '../../components/LogOutButton'
import { collection, getDocs, query, onSnapshot, orderBy } from 'firebase/firestore'
import { db, auth } from '../../config/firebase'

import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
  router.push('/memo/create')
}
// const logOut = (): void => {
//   router.replace('/auth/log_in')
// }

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = collection(db, `users/${auth.currentUser?.uid}/memos`)
    const q = query(ref, orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, (snapshot) => {
      const list: Memo[] = []
      snapshot.forEach((doc) => {
        const { bodyText, createdAt } = doc.data()
        list.push({
          id: doc.id,
          bodyText,
          createdAt
        })
      })
      setMemos(list)
    })
    return unsub
  }, [])

  return (
    <View style={styles.container}>
      {/* todo area */}
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem memo={item} iconName="trash-2" />}
        keyExtractor={(item) => item.id}
      />
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
