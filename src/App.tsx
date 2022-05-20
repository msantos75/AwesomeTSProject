import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react'
import {StyleSheet, SafeAreaView, Button, TextInput} from 'react-native'
import Header from './components/Header'

const App: React.FC = () => {
  const [stateNameTitle, setStateNameTitle] = useState<string>('Bem-vindo ao  React Native!')
  const [stateNameSubTitle, setStateNameSubTitle] = useState<string>('O que vamos fazer primeiro, ')
  const [stateNameUser, setStateNameUser] = useState<string>('Trump')

  useEffect(() => {
    if (stateNameUser === 'Trump') {
      setStateNameTitle('Welcome to React Native!')
      setStateNameSubTitle('What we gonna do first, ')
    } else {
      setStateNameTitle('Bem-vindo ao  React Native!')
      setStateNameSubTitle('O que vamos fazer primeiro, ')
    }
  }, [stateNameUser])

  const handlePressButton = useCallback(() => {
    setStateNameUser(oldName => {
      if (oldName === 'Trump') {
        return 'Bolsonaro'
      } else {
        return 'Trump'
      }
    })
  }, [])

  const nameChanged = useMemo(() => {
    return `${stateNameUser}`
  }, [stateNameUser])

  const inputRef = useRef<TextInput>({} as TextInput)

  return (
    <SafeAreaView style = {style.App}>
      <Header
        nameTitle = {stateNameTitle}
        nameSubTitle = {stateNameSubTitle + nameChanged + '?'}
      />
      <Button title = 'Alterar nome' onPress={(handlePressButton) => inputRef.current.focus()}/>
      <TextInput
        ref = {inputRef}
        style = {style.Input}
        onChangeText = {inputText => setStateNameUser(inputText)}
      />
    </SafeAreaView>
  )
}

export default App

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: "#111222",
    justifyContent: "center"
  },
  Input: {
    padding: 20,
    backgroundColor: "rgba(50,150,50,10)",
    color: "white",
    fontSize: 18,
  }
})
