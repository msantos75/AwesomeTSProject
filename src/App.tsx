import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, Button} from 'react-native'
import Header from './components/Header'

const App: React.FC = () => {
  const [stateNameTitle, setStateNameTitle] = useState<string>('Bem-vindo aos estudos de React Native')
  const [stateNameUser, setStateNameUser] = useState<string>('Donald')

  const handlePressButton = () => {
    setStateNameUser(oldName => {
      if (oldName === 'Donald') {
        return 'Tio Patinhas'
      } else {
        return 'Donald'
      }
    })
  }

  return (
    <SafeAreaView style = {style.App}>
      <Header
        nameTitle = {stateNameTitle}
        nameSubTitle = {'O que vamos fazer primeiro, ' + stateNameUser + '?'}
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
