import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'

const PrimaryButton = ({ title, onPress = () => { } }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.btnContainer}>

        <Text style={styles.title}>{title}</Text>
      </View>

    </TouchableOpacity>
  )
}
 export const SecondaryButton = ({ title, onPress = () => { } }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={{ ...styles.btnContainer, backgroundColor: COLORS.white }}>


        <Text style={{ ...styles.title, color: COLORS.primary }}>{title}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18
  }

})