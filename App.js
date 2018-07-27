import React from 'react'
import {Text, View} from 'react-native'
import {createStackNavigator} from 'react-navigation'

import CreateNew from './app/containers/CreateNew'
import Login from './app/containers/Login'
import Signup from './app/containers/Signup'
import Stats from './app/containers/Stats'
import TimeTable from './app/containers/TimeTable'
import YourInfo from './app/containers/YourInfo'


export default class App extends React.Component{
	render(){
		return(
			<AppStackNavigator />
		)
	}
}

const AppStackNavigator = createStackNavigator({
	Login : Login,
	Sigunp : Signup,
	Stats : Stats,
	TimeTable : TimeTable,
	YourInfo : YourInfo,
	CreateNew : CreateNew

})

exporppStackfault App