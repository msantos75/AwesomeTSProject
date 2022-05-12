import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <SafeAreaView style = {style.App}>
      <Header
        nameTitle = 'Bem-vindo aos estudos de React Native'
        nameSubTitle = 'O que vamos fazer primeiro?'
      />
      <Header
        nameTitle = 'Ainda estamos estudando React Native'
        nameSubTitle = 'O que vamos fazer em seguida?'
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
  }
})
