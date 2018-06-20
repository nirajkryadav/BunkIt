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
      <View style={{flexDirection:'row',paddingTop: 20,paddingBottom: 20,justifyContent: 'space-between'}}>
        <Text style={{color:'#7BC46E', fontSize: 20}}>Time Table</Text>
        <Text style={{color:'#7BC46E', fontSize: 20}}>Home</Text>
        <Text style={{color:'#7BC46E', fontSize: 20}}>Calender</Text>
      </View>
      <Text style={{textAlign:'center',fontSize: 15,paddingBottom: 10}}>Day & Date</Text>
      <View style={{flexDirection:'row',justifyContent: 'space-between',paddingBottom: 30}}>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
      </View>
      <Text style={{textAlign:'center',fontSize: 15,paddingBottom: 10,color:'#7BC46E',paddingBottom: 40}}>Staticstics</Text>

        <View style= {styles.Card}>
          <Text style= {styles.Text}>Total Classes You Can Bunk
          </Text>
          <Text style={{fontSize: 120,textAlign:'center',color:'#f0f0f0'}}>76</Text>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  Card: {
    width:350, 
    height: 350,
    borderRadius: 15,
    borderColor: '#d6d7da',
    borderWidth: 1,
    backgroundColor: '#F47D5D',
    marginLeft: 13
 },
  Text:{
    fontSize: 30,
    fontWeight:"normal",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    color:"#f0f0f0"
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


})
                            