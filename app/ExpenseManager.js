/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Today from './Today.js'
import Month from './Month.js'
import Category from './Category.js'
import PickerExample from './PickerExample.js'
import FontAwesomeTabBar from './FontAwesomeTabBar.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class ExpenseManager extends Component {

  render() {
    return (
    	<ScrollableTabView 
    	tabBarPosition = 'bottom'
    	renderTabBar = {() => <FontAwesomeTabBar />}
    	>
    	
    	<Today tabLabel='clock-o' />
    	<Category tabLabel='list' />
    	<Month tabLabel='calendar' />
    	</ScrollableTabView>

		);
  }
}

module.exports = ExpenseManager;

