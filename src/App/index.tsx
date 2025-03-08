import { View, StyleSheet } from 'react-native'
import 'expo-router/entry'
import CircleButton from '../components/CircleButton'
import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'


const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header title="MemoApp" rightContent="ログアウト" />
      {/* header */}
      {/* todo area */}
      <View>
        <MemoListItem title="やることリスト" date="2025年2月22日" text="×" />
        <MemoListItem title="やることリスト" date="2025年2月22日" text="×" />
        <MemoListItem title="やることリスト" date="2025年2月22日" text="×" />
      </View>
      {/* todo area */}
      {/* button */}
      <CircleButton
        color="#467fd3"
        label="+"
        position="bottomRight"
        buttonStyle={{
          // 必要に応じてカスタムスタイルを追加できます
          // width: 72,
          // height: 72,
          // borderRadius: 36,
        }}
        labelStyle={{
          // 必要に応じてラベルのスタイルをカスタマイズできます
          // fontSize: 36,
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

export default Index
