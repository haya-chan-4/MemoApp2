import { TextInput, StyleSheet, ScrollView, Alert } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import CircleButton from '../../components/CircleButton'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { db, auth } from '../../config/firebase'
import { type Memo } from '../../../types/memo'

const handlePress = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) return
  const ref = doc(db, `users/${auth.currentUser.uid}/memos/`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      router.back()
    })
    .catch((error) => {
      console.log(error)
      Alert.alert('エラーが発生しました')
    })
}

const Edit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos/`, id)
    getDoc(ref).then((docRef) => {
      const remoteBodyText = docRef.data()?.bodyText
      setBodyText(remoteBodyText || '')
    })
      .catch((error) => {
        console.log(error)
      })
  }, []);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.memoEditContainer}>
        <TextInput
          autoFocus
          multiline
          style={styles.memoEditInput}
          value={bodyText}
          onChangeText={(text) => setBodyText(text)}
        />
      </ScrollView>
      <CircleButton
        onPress={() => handlePress(id, bodyText)}
        iconName="check"
        style={{
          backgroundColor: '#467fd3',
          right: 32,
          bottom: 40
        }}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
  memoEditContainer: {
    backgroundColor: "#fdfdfd",
    flex: 1
  },
  memoEditInput: {
    textAlignVertical: 'top',
    paddingHorizontal: 27,
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
    flex: 1
  }
})
export default Edit
