import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import CircleButton from '../../components/CircleButton'
import { onSnapshot, doc } from 'firebase/firestore'
import { db, auth } from '../../config/firebase'
import { type Memo } from '../../../types/memo'
import { useEffect, useState } from 'react'

const handlePress = (id: string): void => {
  //編集画面へ遷移
  router.push({ pathname: '/memo/edit', params: { id } })
}

const Detail = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [memo, setMemo] = useState<Memo | null>(null)
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos/`, id)
    const unsub = onSnapshot(ref, (memoDoc) => {
      const { bodyText, createdAt } = memoDoc.data() as Memo
      setMemo({
        id: memoDoc.id,
        bodyText,
        createdAt
      })
    })
    return unsub
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoHeaderTitle} numberOfLines={1}>{memo?.bodyText}</Text>
        <Text style={styles.memoHeaderDate}>{memo?.createdAt?.toDate().toLocaleDateString('ja-JP')}</Text>
      </View>
      <ScrollView style={styles.memoContent}>
        <Text style={styles.memoContentText}>{memo?.bodyText}</Text>
      </ScrollView>
      <CircleButton
        onPress={() => handlePress(id)}
        iconName="check"
        style={{
          backgroundColor: '#467fd3',
          top: 60,
          bottom: 'auto'
        }}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
  memoHeader: {
    backgroundColor: '#467fd3',
    height: 96,
    paddingHorizontal: 19,
    paddingVertical: 24,
    justifyContent: 'center'
  },
  memoHeaderTitle: {
    color: '#fdfdfd',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    lineHeight: 32
  },
  memoHeaderDate: {
    color: '#fdfdfd',
    fontSize: 12,
    lineHeight: 16,
    paddingTop: 8
  },
  memoContent: {
    paddingHorizontal: 27,
    backgroundColor: '#fdfdfd'
  },
  memoContentText: {
    fontSize: 16,
    paddingVertical: 32,
    lineHeight: 24,
    color: '#000',

  }
})
export default Detail
