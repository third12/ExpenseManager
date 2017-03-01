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
import styles from './js/styles.js'

export default class ExpenseManager extends Component {
  render() {
    return (
		<View style={styles.parent}>
		<View style={styles.child1}>
		<Text style={styles.child5}> Today </Text>
		</View>
		
		<View style={styles.child2}>
			<Text style={styles.child5}> Today </Text>
			<Text style={styles.child5}> Category </Text>
			<Text style={styles.child5}> Month </Text>
		</View>
		</View>
		);
  }
}

module.exports = ExpenseManager;

