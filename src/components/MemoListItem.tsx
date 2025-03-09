import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'


interface Props {
  title: string,
  date: string,
  iconName: keyof typeof Feather.glyphMap,
}

const MemoListItem = (props: Props): JSX.Element => {
  const { title, date, iconName } = props
  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>{title}</Text>
        <Text style={styles.memoListItemDate}>{date}</Text>
      </View>
      <TouchableOpacity>
        <Feather name={iconName} size={20} color="#aaa" />
      </TouchableOpacity>
    </View>
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
