import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    )
  }
}
export {TextInput}