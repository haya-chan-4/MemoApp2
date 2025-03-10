import { TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { router } from 'expo-router'
import { collection, addDoc } from 'firebase/firestore'

import { db } from '../../config/firebase'

const handlePress = (): void => {
  addDoc(collection(db, 'memos'), {
    bodyText: 'Test',
  })
    .then(() => {
      router.back()
    })
}
const Create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView style={styles.memoEditContainer}>
        <TextInput multiline style={styles.memoEditInput} />
      </ScrollView>
      <CircleButton
        onPress={handlePress}
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
