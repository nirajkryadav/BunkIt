import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { 
  Container, 
  Content, 
  Button, 
  Icon, 
  Right, 
  Body, 
  Left, 
  Picker, 
  Form } from "native-base";


export default class YourInfo extends Component {
  static navigationOptions = {
    title:'Second screen',
  }

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      selected3: undefined,
      selected4: undefined,
    }
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  onValueChange3(value: string) {
    this.setState({
      selected3: value
    });
  }
  onValueChange4(value: string) {
    this.setState({
      selected4: value
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textInfo}>Your Info</Text>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="College Name"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="909090"
              style={{ marginTop:20 }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="College Name" value="key0" />
              <Picker.Item label="CIC" value="key5" />
              <Picker.Item label="KMC" value="key1" />
              <Picker.Item label="Ramjas" value="key2" />
              <Picker.Item label="SRCC" value="key3" />
              <Picker.Item label="Hindu" value="key4" />
            </Picker>
            <View style={{height: 1.5,width: 365,backgroundColor: '#707070',marginLeft: 4}}></View>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Course Name"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="909090"
              style={{ marginTop:20 }}
              selectedValue={this.state.selected3}
              onValueChange={this.onValueChange3.bind(this)}
            >
              <Picker.Item label="Course" value="key0" />
              <Picker.Item label="Btech" value="key5" />
              <Picker.Item label="BA" value="key1" />
              <Picker.Item label="MSC" value="key2" />
              <Picker.Item label="BSC" value="key3" />
              <Picker.Item label="MCom" value="key4" />
            </Picker>
            <View style={{height: 1.5,width: 365,backgroundColor: '#707070',marginLeft: 4}}></View>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Year"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="909090"
              style={{ marginTop:20 }}
              selectedValue={this.state.selected4}
              onValueChange={this.onValueChange4.bind(this)}
            >
              <Picker.Item label="Year" value="key0" />
              <Picker.Item label="I" value="key4" />
              <Picker.Item label="II" value="key1" />
              <Picker.Item label="III" value="key2" />
              <Picker.Item label="IV" value="key3" />
            </Picker>
            <View style={{height: 1.5,width: 365,backgroundColor: '#707070',marginLeft: 4}}></View>
          </Form>
      
        <View style={styles.buttonright}>
          <TouchableOpacity
            style={ styles.button}>
            <View style={styles.buttonBorder}>
              <Text style={{color:'#ffffff'}}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  textInfo: {
    color: '#7BC46E',  
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 20 ,
    paddingBottom: 130
  },
  textinputName:{
    height: 50,
    fontSize: 16 
  },
  button: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBorder: {
    width: 136,
    height: 136,
    borderRadius: 68,
    borderWidth: 1,
    borderColor: '#909090',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#7BC46E'
  },
  buttonright:{
    paddingLeft: 220,
    paddingTop:40
  }
})