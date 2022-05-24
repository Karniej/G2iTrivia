import React from 'react'
import { FlatList, Pressable, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text, View } from '../components/Themed'
import { Title } from '../components/Title'
import { parseQuestionString } from '../constants/helpers'
import { Answer, useStore } from '../store/store'
import { RootStackScreenProps } from '../types'
import Ionicons from '@expo/vector-icons/Ionicons'

const Footer = ({ onPress }: { onPress: () => void }) => (
  <Pressable style={styles.footer} onPress={onPress}>
    <Text>PLAY AGAIN?</Text>
  </Pressable>
)
export default function ResultsScreen({
  navigation,
}: RootStackScreenProps<'Results'>) {
  const { state, setState } = useStore()
  const { answers, questions } = state
  const handleNavigateHome = () => navigation.navigate('Home')
  const clearState = () => {
    setState({
      ...state,
      answers: [],
    })
    handleNavigateHome()
  }
  let score = `${
    answers.filter(
      (answer: Answer) => answer.answer === answer.question.correct_answer,
    ).length
  } / ${questions.length}`

  const renderItem = ({ item }: { item: Answer }) => {
    const isGoodAnswer = item.answer === item.question.correct_answer

    return (
      <View style={styles.questionContainer}>
        {/*@ts-ignore IonicIcons error cannot be in JSX issue to fix*/}
        <Ionicons
          name={isGoodAnswer ? 'add' : 'remove'}
          size={20}
          style={styles.icon}
        />
        <Text style={styles.question}>
          {parseQuestionString(item.question.question)}
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Title title={`You scored ${score}`} />
      <FlatList
        data={state.answers}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
      <Footer onPress={clearState} />
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
    backgroundColor: 'transparent',
    maxWidth: '100%',
    paddingTop: 20,
    flexDirection: 'row',
  },
  question: {
    fontSize: 16,
    color: 'grey',
  },
  icon: {
    paddingRight: 5,
    color: 'grey',
  },
  footer: {
    alignSelf: 'center',
  },
})
