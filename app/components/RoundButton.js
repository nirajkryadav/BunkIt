import React, { Component } from 'react'
import {
  StyleSheet, Text, View, TouchableOpacity
  } from 'react-native'

  function RoundButton({ url, color, background, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress= {onPress}
      style={[ styles.button, { backgroundColor: background }]}
      <View style={styles.buttonBorder}>
        <Image
          {require(url)}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	button: {
	    width: 80,
	    height: 80,
	    borderRadius: 40,
	    justifyContent: 'center',
	    alignItems: 'center',
	},
	buttonBorder: {
	    width: 76,
	    height: 76,
	    borderRadius: 38,
	    borderWidth: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	}
})

export {RoundButton}


