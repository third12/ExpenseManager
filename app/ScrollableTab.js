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
  View,
  Navigator
} from 'react-native';
import TodayMain from './TodayMain.js'
import MonthMain from './MonthMain.js'
import CategoryMain from './CategoryMain.js'
import FontAwesomeTabBar from './FontAwesomeTabBar.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class ScrollableTab extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScrollableTabView 
      	tabBarPosition = 'bottom'
      	renderTabBar = {() => <FontAwesomeTabBar />}
      >
      	<TodayMain navigator={this.props.navigator} tabLabel='clock-o' />
      	<CategoryMain navigator={this.props.navigator} tabLabel='list' />
      	<MonthMain navigator={this.props.navigator} tabLabel='calendar' />
    	</ScrollableTabView>
    );
  }
}

module.exports = ScrollableTab;