
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {FbButton} from './components/FbButton'
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        
        <FbButton> Login </FbButton>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
