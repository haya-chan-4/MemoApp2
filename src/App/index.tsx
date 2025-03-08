import { View, Text, StyleSheet } from 'react-native'
import 'expo-router/entry'
import CircleButton from '../components/CircleButton'



const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>MemoApp</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>
      {/* header */}
      {/* todo area */}
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>やることリスト</Text>
            <Text style={styles.memoListItemDate}>2025年2月22日</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>やることリスト</Text>
            <Text style={styles.memoListItemDate}>2025年2月22日</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>やることリスト</Text>
            <Text style={styles.memoListItemDate}>2025年2月22日</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
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
  },
  header: {
    backgroundColor: '#467fd3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: "rgba(255, 255, 255, 0.7)"
  },
  headerTitle: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#fdfdfd'
  },
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

export default Index
