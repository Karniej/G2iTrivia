import { FlatList, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { QuestionCard } from '../components/QuestionCard'

import { Text, View } from '../components/Themed'
import { Title } from '../components/Title'
import { cleanStringFromUnwantedChars } from '../constants/helpers'
import { Answer, Question, useStore } from '../store/store'
import { RootStackScreenProps } from '../types'

export default function ResultsScreen({ navigation }: RootStackScreenProps<'Results'>) {
  const { state, setState } = useStore()

  const handleNavigateHome = () => navigation.navigate('Home')
  const clearState = () => {
    setState({
      ...state,
      answers: [],
    })
    handleNavigateHome()
  }
  let score = state.answers.filter(
    (answer: Answer) => answer.answer === answer.question.correct_answer
  ).length

  const renderItem = ({ item }: { item: Answer }) => {
    const isGoodAnswer = item.answer === item.question.correct_answer

    return (
      <View style={styles.questionContainer}>
        <Text style={[styles.question, styles.icon]}>{isGoodAnswer ? '+' : '-'}</Text>
        <Text style={styles.question}>{cleanStringFromUnwantedChars(item.question.question)}</Text>
      </View>
    )
  }
  const Footer = () => (
    <Pressable style={styles.footer} onPress={clearState}>
      <Text>PLAY AGAIN?</Text>
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.wrapper}>
      <Title title={`You scored ${score}/10`} />
      <FlatList
        data={state.answers}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
      <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  container: {
    justifyContent: 'flex-start',
    margin: 20,
    maxWidth: '100%',
  },
  questionContainer: {
    maxWidth: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 20,
    flexDirection: 'row',
  },
  question: {
    fontSize: 18,
    color: 'grey',
  },
  icon: {
    fontSize: 30,
    paddingRight: 10,
  },
  footer: {
    alignSelf: 'center',
  },
})
