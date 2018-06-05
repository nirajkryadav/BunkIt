import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import LogIn from './components/LogIn';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <LogIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});