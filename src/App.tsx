import React, {useState, useEffect} from 'react'
import {StyleSheet, SafeAreaView, Button} from 'react-native'
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

  const handlePressButton = () => {
    setStateNameUser(oldName => {
      if (oldName === 'Trump') {
        return 'Bolsonaro'
      } else {
        return 'Trump'
      }
    })
  }

  return (
    <SafeAreaView style = {style.App}>
      <Header
        nameTitle = {stateNameTitle}
        nameSubTitle = {stateNameSubTitle + stateNameUser + '?'}
      />
      <Button title = 'Alterar nome' onPress={handlePressButton}/>
    </SafeAreaView>
  )
}

export default App

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: "#111222",
    justifyContent: "center"
  }
})
