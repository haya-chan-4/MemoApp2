import {  TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import { router } from 'expo-router'
import CircleButton from '../../components/CircleButton'

const handlePress = (): void => {
  router.back()
}

const Edit = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView style={styles.memoEditContainer}>
        <TextInput multiline style={styles.memoEditInput} value='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus perspiciatis, nulla cumque eos quasi alias pariatur, aspernatur corrupti voluptates ea harum qui ut illo at. Pariatur quaerat ratione delectus.
        ' />
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
    flex:1
  },
  memoEditInput: {
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
    flex: 1
  }
})
export default Edit
