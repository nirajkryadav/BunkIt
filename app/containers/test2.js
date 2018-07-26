import React, { Component } from 'react';
 
import { StyleSheet, View, Button, Text} from 'react-native';
class Mynewproject extends Component {
  constructor(){
    super();
    this.state={
      enabled : false
    }
  }
  Set_Padding=()=>{
    this.setState({
      enabled : !this.state.enabled
    })
  }
 render() {
   return (
      <View style={styles.MainContainer}>
      <Text style={styles.TextStyle}> Styling </Text>
        <Button color={ (this.state.enabled) ? '#F00' : '#0FF' } title='Change' onPress={this.Set_Padding.bind(this)} />
        <Text></Text>
      </View>
   );
 }
}
 
const styles = StyleSheet.create({
 
  MainContainer :{    
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
  
  },
  TextStyle:{   
      marginBottom: 10,
      color: '#000',
      borderWidth: 1,
  } 
});

export default Mynewproject;