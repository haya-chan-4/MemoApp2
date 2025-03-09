import { View, StyleSheet } from 'react-native'
import 'expo-router/entry'
import CircleButton from '../../components/CircleButton'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'


const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header title="MemoApp" rightContent="ログアウト" />
      {/* header */}
      {/* todo area */}
      <View>
        <MemoListItem title="やることリスト" date="2025年2月22日" iconName="trash-2" />
        <MemoListItem title="やることリスト" date="2025年2月22日" iconName="trash-2" />
        <MemoListItem title="やることリスト" date="2025年2月22日" iconName="trash-2" />
      </View>
      {/* todo area */}
      {/* button */}
      <CircleButton
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
