import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, TextProps } from './Themed'

export const MonoText = (props: TextProps) => (
  <Text {...props} style={[props.style, styles.text]} />
)
const styles = StyleSheet.create({
  text: {
    fontFamily: 'space-mono',
  },
})
