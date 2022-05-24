import { Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text, View } from '../components/Themed'
import { Title } from '../components/Title'
import { RootStackScreenProps } from '../types'

export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  const navigateToQuiz = () => navigation.navigate('Quiz')
  return (
    <SafeAreaView style={styles.container}>
      <Title title='Welcome to the Trivia Challenge' />
      <Text style={styles.subtitle}>You will be presented with 10 True or False questions</Text>
      <Text style={styles.subtitle}>Can you score 100%?</Text>
      <Button color='black' title='BEGIN' onPress={navigateToQuiz} />
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
