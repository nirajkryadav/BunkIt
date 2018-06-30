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
        <ViewRow>
         <ViewCol>
            <Text style={{color:'#7BC46E'}}>M</Text>
            <Text style={{color:'#7BC46E'}}>T</Text>
            <Text style={{color:'#7BC46E'}}>W</Text>
            <Text style={{color:'#7BC46E'}}>T</Text>
            <Text style={{color:'#7BC46E'}}>F</Text>
            <Text style={{color:'#7BC46E'}}>S</Text>
         </ViewCol>
         <ViewCol>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
         </ViewCol>
         <ViewCol>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
         </ViewCol>
         <ViewCol>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
         </ViewCol>
         <ViewCol>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
         </ViewCol>
         
         <ViewCol>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
         </ViewCol>
         <ViewCol>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
         </ViewCol>
         <ViewCol>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
            <View style={styles.cell}/>
         </ViewCol>
        </ViewRow>
        <View style={styles.buttonrightEdit}>
          <TouchableOpacity
            style={ styles.buttonEdit}>
            <View style={styles.buttonBorderEdit}>
              <Text style={{color:'#ffffff'}}>Edit</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={styles.buttonrightNew}>
            <TouchableOpacity
              style={ styles.buttonNew}>
              <View style={styles.buttonBorderNew}>
                <Text style={{color:'#ffffff'}}>Create New</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={ styles.buttonAccept}>
              <View style={styles.buttonBorderAccept}>
                <Text style={{color:'#ffffff',fontSize: 20}}>Accept</Text>
              </View>
            </TouchableOpacity>
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
      paddingTop: 0,
      paddingBottom:0,
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
    paddingBottom: 150
  },
  buttonEdit: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonrightEdit:{
    paddingLeft: 290,
    paddingTop:40
  },
  buttonBorderEdit: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#909090',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F47D5D'
  },
  buttonAccept: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  buttonBorderAccept: {
    width: 116,
    height: 116,
    borderRadius: 58,
    borderWidth: 1,
    borderColor: '#909090',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#7BC46E'
  },
  buttonNew: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonrightNew:{
    paddingLeft: 90,
    marginTop: 80
  },
  buttonBorderNew: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 1,
    borderColor: '#909090',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#68CDF1'
  },
});