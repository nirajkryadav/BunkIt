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
        <Text style={styles.textlogin} >Signup</Text>
        <TextInput style={styles.textinput}
        placeholder = 'Name'/>
        <TextInput style={styles.textinput}
        placeholder = 'email id'/>
        <TextInput secureTextEntry={true} style={styles.textinput}
        placeholder = 'password'/>
        <TextInput secureTextEntry={true} style={styles.textinput}
        placeholder = 'Confirm Password'/>
       <TouchableOpacity
            onPress={ () => console.log('pressed') }
            style={ styles.button_Up}>
          <Text style={{fontSize: 20,textAlign: 'center',marginTop: 4,color: '#ffffff' }}>SignUp</Text>
        </TouchableOpacity>
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
    paddingBottom: 120
  },
  textforgot: {
    color: '#1F7FEF',
    fontSize: 14,
    textAlign:'right',
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 40
  },
  textinput:{
    height: 40, 
    marginBottom: 20
  },
  button_Up:{
    backgroundColor: '#7BC46E',
    height: 40,
    borderRadius: 20,marginTop: 30

  }

  
})