import { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { QuestionCard } from '../components/QuestionCard'
import { Text, View } from '../components/Themed'
import { Title } from '../components/Title'
import { parseQuestionString } from '../constants/helpers'
import { Question, useStore } from '../store/store'
import { RootStackScreenProps } from '../types'

export default function QuizScreen({ navigation }: RootStackScreenProps<'Quiz'>) {
  const { state, setState } = useStore()
  console.log('state: ', state)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  let currentQuestion = state.questions[currentQuestionIndex]
  const question =
    currentQuestion !== undefined ? parseQuestionString(currentQuestion.question) : ''
  const answerQuestion = () => {}
  const handleOnPress = (answer: 'True' | 'False') => {
    if (currentQuestionIndex < state.questions.length - 1) {
      setState({
        ...state,
        answers: [...state.answers, { question: currentQuestion, answer: answer }],
      })
      setCurrentQuestionIndex((prevState) => prevState + 1)
    } else {
      navigation.navigate('Results')
    }
  }

  console.log('state: ', state)
  return (
    <SafeAreaView style={styles.wrapper}>
      <Title title='Category' />
      <View style={styles.container}>
        <QuestionCard question={question} />
        <Text>{currentQuestionIndex + 1} of 10</Text>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={() => handleOnPress('True')}>
            <Text>True</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleOnPress('False')}>
            <Text>False</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  button: {
    padding: 4,
    margin: 4,
    borderWidth: 1,
  },
})
