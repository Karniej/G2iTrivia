import React, { createContext, Dispatch, useContext, useState } from 'react'

export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}
export type Answer = {
  question: Question
  answer: 'True' | 'False'
}
type AppState = {
  questions: Question[] | []
  answers: Answer[] | []
}

const initialState = {
  questions: [],
  answers: [],
}

const StoreContext = createContext<{
  setState: Dispatch<any>
  state: AppState
}>({ state: initialState, setState: () => null })

export const StoreProvider = ({ children }: any) => {
  const [state, setState] = useState(initialState)
  return <StoreContext.Provider value={{ state, setState }}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
