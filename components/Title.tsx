import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from './Themed'

type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => <Text style={styles.title}>{title}</Text>

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
