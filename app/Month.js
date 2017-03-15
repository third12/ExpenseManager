import React, { Component } from 'react';

import {
  AppRegistry,
  Button,
  ListView,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import MonthMain from './MonthMain.js';
import DaySelected from './DaySelected.js';
import styles from './js/monthStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class Month extends Component {
   render() {
    return (
      <Navigator
        initialRoute={{ name: 'MonthMain' }}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator) {
     if(route.name == 'MonthMain') {
       return <MonthMain navigator={navigator}  />
     }
     if(route.name == 'DaySelected') {
       return <DaySelected navigator={navigator} />
     }
  }
}

module.exports = Month;