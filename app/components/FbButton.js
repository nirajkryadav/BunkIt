import React from 'react'
import { Button, Alert } from 'react-native'

const FbButton = (props) => {
	return (
		<Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Learn More"
  color="#0D0D0D"
  accessibilityLabel="Learn more about this purple button"/>
		)
}



export {FbButton}
