import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Button,
  Alert,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import styles from './js/todaystyles.js';
import TodayMain from './TodayMain.js';
import AddExpense from './AddExpense.js';
import ChooseCategory from './ChooseCategory.js';


class Today extends Component {

	constructor(props){
		super(props);
	}

	render() {
		return (	
			<Navigator
				  initialRoute={{ name: 'todayMain' }}
				  renderScene={this.renderScene.bind(this)}
			/>	
	  	);
	}

	renderScene(route, navigator) {
		if(route.name == 'todayMain') {
			return <TodayMain navigator={navigator}  />
		}
		if(route.name == 'addExpense') {
			return <AddExpense navigator={navigator}/>
		}
		if(route.name == 'chooseCategory') {
			return <ChooseCategory navigator={navigator} />
		}		
	}	
}

module.exports = Today;