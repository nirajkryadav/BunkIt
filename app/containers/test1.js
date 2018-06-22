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
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <View style={styles.cell}/>
        <TouchableOpacity style={ this.state.pressStatus ? styles.buttonPress : styles.button }
            onHideUnderlay={this._onHideUnderlay.bind(this)}
            onShowUnderlay={this._onShowUnderlay.bind(this)}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={[styles.roundbutton, {backgroundColor:'#7BC46E'}]}> 
            </View>
            <Text>Dynamics Eduations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection:'row',alignItems:'center'}}>
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
