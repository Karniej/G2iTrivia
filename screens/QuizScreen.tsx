import React from 'react'
import { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { QuestionCard } from '../components/QuestionCard'
import { Text, View } from '../components/Themed'
import { Title } from '../components/Title'
import { parseQuestionString } from '../constants/helpers'
import { useStore } from '../store/store'
import { RootStackScreenProps } from '../types'

export default function QuizScreen({
  navigation,
}: RootStackScreenProps<'Quiz'>) {
  const { state, setState } = useStore()

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  let currentQuestion = state.questions[currentQuestionIndex]
  const question =
    currentQuestion !== undefined
      ? parseQuestionString(currentQuestion.question)
      : ''
  const handleOnPress = (answer: 'True' | 'False') => {
    if (currentQuestionIndex < state.questions.length - 1) {
      setState({
        ...state,
        answers: [...state.answers, { question: currentQuestion, answer }],
      })
      setCurrentQuestionIndex(prevState => prevState + 1)
    } else {
      navigation.navigate('Results')
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Title title={currentQuestion.category} />
      <View style={styles.container}>
        <QuestionCard question={question} />
        <Text>{currentQuestionIndex + 1} of 10</Text>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => handleOnPress('True')}
          >
            <Text>True</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => handleOnPress('False')}
          >
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
    backgroundColor: 'transparent',
  },
  buttonsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  button: {
    padding: 4,
    margin: 4,
    borderWidth: 1,
  },
})
