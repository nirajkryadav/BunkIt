import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}

export default class Basic extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textlogin} >Lets Update</Text>

        <TextInput style={styles.textinput}
        keyboardType = 'numeric'
        placeholder = 'Current Percentage'/>

        <TextInput style={styles.textinput}
        keyboardType = 'numeric'
        placeholder = 'Total classes Till Now'/>

        <TextInput style={styles.textinput}
        keyboardType = 'numeric'
        placeholder = 'Percentage Needed'/>

        <View style={styles.buttonright}>
          <TouchableOpacity
            style={ styles.button}>
            <View style={styles.buttonBorder}>
              <Text style={{color:'#ffffff'}}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  textlogin: {
    color: '#7BC46E',  
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 20 ,
    paddingBottom: 130
  },
  textinput:{
    height: 40, 
    marginBottom: 30
  },
  
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
  },
  button: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBorder: {
    width: 116,
    height: 116,
    borderRadius: 58,
    borderWidth: 1,
    borderColor: '#909090',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#7BC46E'
  },
  buttonright:{
    paddingLeft: 220,
    paddingTop:40
  }
})