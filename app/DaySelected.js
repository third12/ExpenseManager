import React, { Component } from 'react';

import {
  Button,
  Navigator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './js/monthStyles.js';
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
                <Text style={styles.todayText}></Text>
              </View>
            </View>
        </View>
      <View style={styles.bottomContainer}>
        <View style={styles.expenseForToday}>
          <Text style={styles.date}>aaaaaa</Text>
          <Text style={styles.amount}>360.00</Text>
        </View>
        <View style={styles.expenses}>
          <View style={styles.header3}>
            <View style={styles.header1}>
               <Text style={styles.row}>Food</Text> 
            </View>
            <View style={styles.header2}>
              
                <Text style={styles.row}>200.00  <Icon name="caret-down" size={20} color="black" /></Text>
    
            </View>
          </View>
          <View style={styles.categoryExpenses}>
            <View style={styles.header1}>
               <Text style={styles.foodRow}>Burger Steak</Text> 
            </View>
            <View style={styles.header2}>
              
                <Text style={styles.foodRow}>80.00 </Text>
    
            </View>
          </View>
          <View style={styles.categoryExpenses}>
            <View style={styles.header1}>
               <Text style={styles.foodRow}>Snacks</Text> 
            </View>
            <View style={styles.header2}>
              
                <Text style={styles.foodRow}>20.00 </Text>
    
            </View>
          </View>
          <View style={styles.categoryExpenses}>
            <View style={styles.header1}>
               <Text style={styles.foodRow}>Lunch at Rob</Text> 
            </View>
            <View style={styles.header2}>
              
                <Text style={styles.foodRow}>120.00 </Text>
    
            </View>
          </View>
          <View style={styles.header3}>
            <View style={styles.header1}>
               <Text style={styles.row}>Transportation</Text> 
            </View>
            <View style={styles.header2}>
              
                <Text style={styles.row}>160.00  <Icon name="caret-down" size={20} color="black" /></Text>
    
            </View>
          </View>
          <View style={styles.categoryExpenses}>
            <View style={styles.header1}>
               <Text style={styles.foodRow}>Taxi</Text> 
            </View>
            <View style={styles.header2}>
              
                <Text style={styles.foodRow}>160.00 </Text>
    
            </View>
          </View>                             
        </View>
      </View>
      </View>

    );
  }
}

module.exports = AddCategory;