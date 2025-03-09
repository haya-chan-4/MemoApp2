import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { router } from 'expo-router'
import CircleButton from '../../components/CircleButton'

const handlePress = (): void => {
  //編集画面へ遷移
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoHeaderTitle}>買い物リスト</Text>
        <Text style={styles.memoHeaderDate}>2025年2月22日</Text>
      </View>
      <ScrollView style={styles.memoContent}>
        <Text style={styles.memoContentText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ratione porro ipsa sequi cupiditate quis saepe consectetur nesciunt cum in? Cum accusantium eius soluta voluptatibus non dolorem doloremque quam fugit.
        </Text>
      </ScrollView>
      <CircleButton
        onPress={handlePress}
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
    paddingVertical: 32,
    paddingHorizontal: 27,
    backgroundColor: '#fdfdfd'
  },
  memoContentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000'
  }
})
export default Detail
