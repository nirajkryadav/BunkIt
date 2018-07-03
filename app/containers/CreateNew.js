import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

function ViewRow({ children }) {
  return (
    <View style={styles.viewRow}>{children}</View>
  )
}

function ViewCol({ children }) {
  return (
    <View style={styles.viewCol}>{children}</View>
  )
}


export default class TimeTable extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTime} >Create New</Text>
        <Text style={{fontSize: 18}}> We are not able to find your time table</Text>
        <Text style={{fontSize: 18}}> would you like to create new</Text>

        <View style={{paddingTop: 40}}>
          <TouchableOpacity
            style={ styles.button}>
            <View style={styles.buttonBorder}>
              <Text style={{color:'#ffffff', fontSize: 170,textAlign: 'center',marginBottom: 15}}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 180,paddingLeft: 250}}>
          <TouchableOpacity
            style={ styles.exitButton}>
            <View style={styles.exitButtonBorder}>
              <Text style={{color:'#ffffff', fontSize: 20,textAlign: 'center',marginBottom: 5}}>Exit</Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',

  },
   cell: {
      width:40, 
      height: 30, 
      borderRadius: 10,
      borderColor: '#d6d7da',
      marginBottom: 5,
      borderWidth: 1,
   },
   viewRow: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      paddingLeft: 25,
      paddingRight: 25,
  },
   viewCol: {
      flexDirection: 'column',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
   },
   line:{
    width: 1.5,
    backgroundColor: '#ff0000',
    marginRight:3
  },
  textTime: {
    color: '#7BC46E',  
    fontSize: 38,
    textAlign: 'right',
    paddingRight: 20 ,
    paddingBottom: 130,
    textAlign: 'center'
  },
  roundbutton: {
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '5%',
      backgroundColor:'#7BC46E'
  },
  roundbutton1: {
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '5%',
      backgroundColor:'#F15B6C'
  },
  button: {
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBorder: {
    width: 176,
    height: 176,
    borderRadius: 88,
    borderWidth: 1,
    borderColor: '#68CDF1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#68CDF1'
  },
  exitButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButtonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 1,
    borderColor: '#F47D5D',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F05656'
  },
});
