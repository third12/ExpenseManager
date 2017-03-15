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

import CategoryMain from './CategoryMain.js';
import AddCategory from './AddCategory.js';
import CategorySpecific from './CategorySpecific.js';
import styles from './js/categoryStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class Category extends Component {
   render() {
    return (
      <Navigator
        initialRoute={{ name: 'categoryMain' }}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator) {
     if(route.name == 'categoryMain') {
       return <CategoryMain navigator={navigator}  />
     }
     if(route.name == 'addCategory') {
       return <AddCategory navigator={navigator} />
     }
     if(route.name == 'categorySpecific') {
       return <CategorySpecific navigator={navigator} />
     }
  }
}

module.exports = Category;