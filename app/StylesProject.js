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

export default class StylesProject extends Component {
  render() {
    return (
      <View style={styles.parent}>

        <View style={styles.parent1}>

          <View style={styles.child11}>
            <Text style={styles.child1}> 1 </Text>
            <Text style={styles.child2}> 2 </Text>
          </View>

          <View style={styles.child12}>
            <Text style={styles.child3}> 3 </Text>
          </View>

          <View style={styles.child13}>
            <Text style={styles.child4}> 4 </Text>
          </View>

        </View>

        <View style={styles.parent2}>
            <View style={styles.child21}>
              <Text style={styles.child5}> 5 </Text>
              <Text style={styles.child6}> 6 </Text>
            </View>

          <View style={styles.child22}>
            <Text style={styles.child7}> 7 </Text>
          </View>
        </View>
        
      </View>
    );
  }
}

module.exports = StylesProject;
