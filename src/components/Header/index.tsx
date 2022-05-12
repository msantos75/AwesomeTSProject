import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header: React.FC = () => {
  return (
  <View>
    <Text style = {style.Title}>
      Bem-vindo aos estudos de React Native
    </Text>
    <Text style = {style.SubTitle}>
      O que vamos fazer primeiro?
    </Text>
  </View>
  )
}

export default Header

const style = StyleSheet.create({
  Title: {
    color: "white",
    fontSize: 24,
    textAlign : "center",
  },
  SubTitle: {
    color: "white",
    fontSize: 18,
    textAlign : "center",
  }
})

