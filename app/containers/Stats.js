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
        <View style={{flexDirection: 'row',justifyContent:'space-between',paddingTop: 20}}>
          <Text style={{color: '#7BC46E',paddingRight: 40,fontSize: 20}}>TimeTable</Text>
          <Text style={{color: '#7BC46E',paddingRight: 40,fontSize: 20}}>Home</Text>
          <Text style={{color: '#7BC46E',fontSize: 20}}>Calender</Text>
        </View>
        <Text style={{marginTop: 30}}> Day and Date</Text>
        <View style={{flexDirection: 'row',paddingTop: 5}}>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
        </View>
        <Text style={{color: '#7BC46E',paddingTop: 50}}> Staticstics</Text>
        <View style={styles.line}></View>
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
    alignItems: 'center',

  },
  Card: {
    width:350, 
    height: 350,
    borderRadius: 10,
    borderColor: '#d6d7da',
    backgroundColor: '#F47D5D',
    borderWidth: 1,
    marginTop: 20
  },
  Text:{
    fontSize: 30,
    fontWeight:"normal",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    color: '#E6E5E5'
  },
  cell: {
    width:40, 
    height: 30, 
    borderRadius: 10,
    borderColor: '#d6d7da',
    marginBottom: 5,
    borderWidth: 1,
    marginRight: 10
  },
  line:{
    height: 1.5,
    width: '100%',
    backgroundColor: '#707070',
    marginTop: 20
  },


})