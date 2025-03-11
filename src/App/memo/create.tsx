import { TextInput, StyleSheet, ScrollView } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import { db, auth } from '../../config/firebase'

const handlePress = async (bodyText: string): Promise<void> => {
  if (auth.currentUser === null) {
    return
  }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  await addDoc(ref, {
    bodyText,
    createdAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      router.back()
    })
    .catch((error) => {
      console.log(error)
    })
}
const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('メモを入力')
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.memoEditContainer}>
        <TextInput
        autoFocus
        multiline
        style={styles.memoEditInput}
        placeholder={bodyText}
        onChangeText={(text) => setBodyText(text)} />
      </ScrollView>
      <CircleButton
        onPress={() => handlePress(bodyText)}
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
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1
  },
  memoEditInput: {
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
    flex: 1
  }
})
export default Create
