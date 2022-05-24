import React from 'react'
import axios from 'axios'
import { useCallback, useEffect } from 'react'
import { Alert, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { API_URL } from '../constants/constants'
import { Text } from '../components/Themed'
import { Title } from '../components/Title'
import { RootStackScreenProps } from '../types'
import { useStore } from '../store/store'

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<'Home'>) {
  const navigateToQuiz = () => navigation.navigate('Quiz')
  const { state, setState } = useStore()
  const { answers } = state
  const setData: () => void = useCallback(async () => {
    try {
      const data = await axios.get(API_URL)
      const { data: results } = await data
      setState({ questions: results.results, answers: [...answers] })
    } catch (error: any) {
      Alert.alert('Error', error.message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setData()
  }, [setData])

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Welcome to the Trivia Challenge" />
      <Text style={styles.subtitle}>
        You will be presented with 10 True or False questions
      </Text>
      <Text style={styles.subtitle}>Can you score 100%?</Text>
      <Button color="black" title="BEGIN" onPress={navigateToQuiz} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 5,
  },

  subtitle: {
    fontSize: 25,
    paddingHorizontal: 25,
    textAlign: 'center',
  },
})
