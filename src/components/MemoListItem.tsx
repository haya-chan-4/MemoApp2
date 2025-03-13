import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { type Memo } from '../../types/memo'
import { deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../config/firebase'
interface Props {
  iconName: keyof typeof Feather.glyphMap,
  memo: Memo
}

const handlePress = (id: string): void => {
  if (auth.currentUser === null) return
  const ref = doc(db, `users/${auth.currentUser.uid}/memos/`, id)
  Alert.alert('Delete', '本当に削除しますか？', [
    {
      text: 'キャンセル',
      style: 'cancel'
    },
    {
      text: '削除する',
      style: 'destructive',
      onPress: () => {
        deleteDoc(ref)
          .then(() => {
            console.log('メモを削除しました')
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  ])
}

const MemoListItem = (props: Props): JSX.Element | null => {
  const { iconName, memo } = props
  const { bodyText, createdAt } = memo
  if (bodyText === null || createdAt === null) { return null }
  const dateString = memo.createdAt.toDate().toLocaleDateString()
  return (
    <Link
      href={{ pathname: '/memo/detail', params: { id: memo.id } }} asChild>
      <TouchableOpacity style={styles.memoListItem} >
        <View>
          <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity onPress={() => handlePress(memo.id)}>
          <Feather name={iconName} size={20} color="#aaa" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fdfdfd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})


export default MemoListItem
