import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const App: React.FC = () => {
  return <View style = {style.App}>
    <Text style = {style.Title}>
      Bem-vindo aos estudos de React Native
    </Text>
  </View>
}

export default App

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: "#111222",
    justifyContent: "center",
  },
  Title: {
    color: "white",
    fontSize: 24,
    textAlign : "center",
  }
})
