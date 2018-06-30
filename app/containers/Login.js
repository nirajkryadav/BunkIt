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
        <Text style={styles.textlogin} >Log in</Text>
        <TextInput style={styles.textinputEm}
        placeholder = 'email id'/>
        <TextInput style={styles.textinputPass}
        placeholder = 'password'/>
        <Text style={styles.textforgot}>Forgot Password?</Text>
        <View style={styles.contin}>
          <View style={styles.line}/>
          <Text style={{color:'#F15B6C',paddingVertical: 10}}>or continue with </Text>
          <View style={styles.line}/>
        </View>

        <ButtonsRow>
          <TouchableOpacity
            onPress={ this.FbLogin.bind(this) }
            style={ styles.button}>
            <View style={styles.buttonBorder}>
            <Image style={{width: 50, height: 50}} source={require('../images/Glogo.png')}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ this.FbLogin.bind(this) }
            style={ styles.button}>
            <View style={styles.buttonBorder}>
            <Image style={{width: 50, height: 50}} source={require('../images/Flogo.png')}/>
            </View>
          </TouchableOpacity>
        </ButtonsRow>
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
    paddingBottom: 150
  },
  textforgot: {
    color: '#1F7FEF',
    fontSize: 14,
    textAlign:'right',
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 40
  },
  textinputEm:{
    height: 40, 
  },
  textinputPass:{
    height: 40, 
  },
  contin:{
    flexDirection:'row',
    paddingRight: 30,
    paddingLeft: 30,
    alignItems:'center'
  },
  line:{
    height: 1.5,
    width: 100,
    backgroundColor: '#707070',
    marginRight:3
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
    paddingLeft: 80,
    paddingRight: 80,
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
})