import { View, Text, StyleSheet } from 'react-native'
import 'expo-router/entry'



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
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
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
    borderBottomWidth:1,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate:{
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
  circleButton: {
    width:64,
    height:64,
    borderRadius:32,
    backgroundColor: '#467fd3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 32,
    bottom: 32,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 8},
    elevation: 8
  },
  circleButtonLabel:{
    color:'#fff',
    fontSize: 32,
    lineHeight: 40
  }
})

export default Index
