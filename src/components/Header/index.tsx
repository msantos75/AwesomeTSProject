import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Props} from './type'

const Header: React.FC<Props> = (prop) => {
  return (
  <View>
    <Text style = {style.Title}>
      {prop.nameTitle}
    </Text>
    <Text style = {style.SubTitle}>
      {prop.nameSubTitle}
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

