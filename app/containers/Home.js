import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Alert,
  Text
} from 'react-native'

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style= {styles.Card}>
          <Text style= {styles.Text}>Total Classes You Can Bunk
          </Text>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 200,
    paddingHorizontal: 20,
  },
  Card: {
    width:350, 
    height: 350,
    borderRadius: 10,
    borderColor: '#d6d7da',
    borderWidth: 1,
 },
  Text:{
    fontSize: 30,
    fontWeight:"normal",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },


})
