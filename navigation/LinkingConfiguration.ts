import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from '../types'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: {
        screens: {
          HomeScreen: 'home',
        },
      },
      Quiz: {
        screens: {
          QuizScreen: 'quiz',
        },
      },
      Results: {
        screens: {
          ResultsScreen: 'results',
        },
      },
    },
  },
}

export default linking
