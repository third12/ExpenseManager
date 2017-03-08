import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Button,
  Alert,
  View
} from 'react-native';


const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

import styles from './js/todaystyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class Today extends Component {

constructor(props){
	super(props);
	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	this.state = {
		categories: ds.cloneWithRows([
			'Food', 'Transportation'
		]),
		amounts: ds.cloneWithRows([
			'200.00', '160.00'
		]),
		food: ds.cloneWithRows([
			'Burger Steak', 'Snacks', 'Lunch at Rob'
		]),
		foodAmount: ds.cloneWithRows([
			'80.00', '20.00', '120.00'
		]),
	};
}

render() {
	var moment = require('moment');
	var date = moment().format('MMMM Do YYYY, dddd');

 	return (
		<View style={styles.parent}> 
			<View style={styles.topContainer}>
				<View style={styles.top1}>
					<View style={styles.header1}><Text style={styles.todayText}>Today</Text></View>
					<View style={styles.header2}>
						<View style={styles.newExpense} onPress={onButtonPress}><Icon name="edit" size={20} color="black" /></View>
					</View>
				</View>

			</View>
			
			<View style={styles.bottomContainer}>
				<View style={styles.expenseForToday}>
					<Text style={styles.date}>{date}</Text>
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

module.exports = Today;