import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <TouchableOpacity >
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={[styles.roundbutton, {backgroundColor:'#7BC46E',marginTop: 20}]}> 
            </View>
            <Text style={{alignItems: 'center' }}>Dynamics Eduations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center',marginTop: 20}}>
            <View style={[styles.roundbutton, {backgroundColor:'#0076FF'}]}> 
            </View>
            <Text>Linear Algebra</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center',marginTop: 20}}>
            <View style={[styles.roundbutton, {backgroundColor:'#0076FF'}]}> 
            </View>
            <Text>Linear Algebra</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center',marginTop: 20}}>
            <View style={[styles.roundbutton, {backgroundColor:'#0076FF'}]}> 
            </View>
            <Text>Linear Algebra</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center',marginTop: 20}}>
            <View style={[styles.roundbutton, {backgroundColor:'#0076FF'}]}> 
            </View>
            <Text>Linear Algebra</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center',marginTop: 20}}>
            <View style={[styles.roundbutton, {backgroundColor:'#0076FF'}]}> 
            </View>
            <Text>Linear Algebra</Text>
          </View>
        </TouchableOpacity>
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
  },
  cell: {
    width:40, 
    height: 30, 
    borderRadius: 10,
    borderColor: '#d6d7da',
    marginBottom: 5,
    borderWidth: 1,
   },
   roundbutton: {
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '5%',
  },
 button:{
      marginTop: 0
 },
 buttonPress:{
      borderColor: '#707070',
      borderWidth: 1,
      borderRadius: 10,
 }

});