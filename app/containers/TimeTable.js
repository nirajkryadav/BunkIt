

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
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
         <ViewCol>
            <ViewRow>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
            </ViewRow>
            <ViewRow>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
            </ViewRow>
            <ViewRow>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
            </ViewRow>
            <ViewRow>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
            </ViewRow>
            <ViewRow>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
            </ViewRow>
            <ViewRow>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
            </ViewRow>
            <ViewRow>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
               <View style={styles.cell}/>
            </ViewRow>
         </ViewCol>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingTop: 0,
      paddingBottom:0,
  },
   cell: {
      width:40, 
      height: 30, 
      //backgroundColor: 'green',
      borderRadius: 10,
      borderColor: '#d6d7da',
      borderWidth: 1,
   },
   viewRow: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingLeft: 25,
      paddingRight: 25,
  },
   viewCol: {
      flexDirection: 'column',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
   },

});
