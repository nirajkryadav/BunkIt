
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Alert
} from 'react-native'
import {RoundButton} from './components/RoundButton'

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}

export default class About extends Component {
  FbLogin(){
    Alert.alert("Fblogin")  
  }

  GLogin(){
    Alert.alert("Google Login")
  }
  render() {
    return (
      <View style={styles.container}>
        <ButtonsRow>
          <RoundButton
            title='F'
            color='#3B5998'
            background='#FFFFFF'
            onPress={ this.FbLogin.bind(this) }
          />
          <RoundButton
            title='G'
            color='#3B5998'
            background='#FFFFFF'
            onPress={ this.GLogin.bind(this) }
          />
        </ButtonsRow>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 400,
    paddingHorizontal: 20,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
  },
})
