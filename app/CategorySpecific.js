import React, { Component } from 'react';

import {
  Button,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './js/todaystyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class CategorySpecific extends Component {
	render() {
	var moment = require('moment');
	var date = moment().format('MMMM Do YYYY, dddd');


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
	              <Text style={styles.todayText}>Transportation</Text>
	            </View>
	          </View>

			</View>
			
			<View style={styles.bottomContainer}>
				<View style={styles.expenseForToday}>
					<Text style={styles.amount}>100.00</Text>
				</View>
				<View style={styles.expenses}>
					<View style={styles.header3}>
						<View style={styles.header1}>
							 <Text style={styles.row}>Today</Text> 
						</View>
						<View style={styles.header2}>
							
								<Text style={styles.row}>20.00 <Icon name="caret-down" size={20} color="black" /></Text>
		
						</View>
					</View>
					<View style={styles.categoryExpenses}>
						<View style={styles.header1}>
							 <Text style={styles.foodRow}>Trike</Text> 
						</View>
						<View style={styles.header2}>
							
								<Text style={styles.foodRow}>20.00 </Text>
		
						</View>
					</View>
					<View style={styles.header3}>
						<View style={styles.header1}>
							 <Text style={styles.row}>14 - Tue</Text> 
						</View>
						<View style={styles.header2}>
							
								<Text style={styles.row}>80.00  <Icon name="caret-down" size={20} color="black" /></Text>
		
						</View>
					</View>
					<View style={styles.categoryExpenses}>
						<View style={styles.header1}>
							 <Text style={styles.foodRow}>Taxi</Text> 
						</View>
						<View style={styles.header2}>
							
								<Text style={styles.foodRow}>80.00 </Text>
		
						</View>
					</View>															
				</View>
			</View>
		</View>
	);
  }
}

module.exports = CategorySpecific;