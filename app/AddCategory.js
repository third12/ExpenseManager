import React, { Component } from 'react';

import {
  Button,
  Navigator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './js/categoryStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddCategory extends Component {
  render() {
    return (
      <View style={styles.parent}> 
        <View style={styles.topContainer}>
          <View style={styles.top1}>
            <TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
            <View style={styles.leftArrow}>
                <Icon name="chevron-left" size={25} color='black' />    
            </View>
            </TouchableOpacity>
            <View style={styles.header2}>
              <Text style={styles.todayText}>Add Category</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>      
          <TextInput
            style={{height: 40}}
            placeholder="Type new category here"
          />
          <View style={styles.button}>
            <Button title="Save" color="gray"/>
          </View>       
        </View>
      </View>

    );
  }
}

module.exports = AddCategory;