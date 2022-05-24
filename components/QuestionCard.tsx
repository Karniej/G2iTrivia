import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from './Themed'

type QuestionCardProps = {
  question: string
}

export const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 20,
  },
  question: {
    fontSize: 20,
  },
})
