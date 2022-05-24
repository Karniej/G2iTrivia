import { FlatList, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { QuestionCard } from '../components/QuestionCard'

import { Text, View } from '../components/Themed'
import { Title } from '../components/Title'
import { RootStackScreenProps } from '../types'

export default function ResultsScreen({ navigation }: RootStackScreenProps<'Results'>) {
  const data = [{ answer: '-', question: 'Does it have a tail?' }]
  const renderItem = ({ item }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{item.answer}</Text>
      <Text style={styles.question}>{item.question}</Text>
    </View>
  )

  const handleNavigateHome = () => navigation.navigate('Home')
  return (
    <SafeAreaView style={styles.wrapper}>
      <Title title='You scored 3/10' />
      <FlatList data={data} renderItem={renderItem} contentContainerStyle={styles.container} />
      <Pressable onPress={handleNavigateHome}>
        <Text>PLAY AGAIN?</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    alignSelf: 'flex-start',
    paddingTop: 20,
    flexDirection: 'row',
  },
  question: {
    fontSize: 20,
    color: 'grey',
  },
})
