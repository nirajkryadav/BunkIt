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
        <Text style={styles.textTime} >Your Time Table</Text>
        

        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <View>
          <View style={{flexDirection:'row',alignItems:'center',paddingBottom: 20}}>
            <View style={styles.roundbutton}>
            </View>
            <Text>Dynamics Eduations</Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={styles.roundbutton1}>
            </View>
            <Text>Networking</Text>
          </View>
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
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 20 ,
    paddingBottom: 70
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
  }
});
