import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Button,
  Alert,
  View,
  Navigator,
  AsyncStorage,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import demoData from './data.js';
import styles from './js/todaystyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class TodayMain extends Component {
	navigate(routeName){
		this.props.navigator.push({
			name: routeName
		});
	}
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({
	      	rowHasChanged: (r1, r2) => r1 !== r2,
	      	sectionHeaderHasChanged: (s1, s2) => s1 !== s2
		});
		this.state = {
			expenses: 'expenses',
			totalExpense: '0',
			dataSource: ds.cloneWithRowsAndSections([]),
		};
	}

	componentWillMount(){
		// AsyncStorage.clear();
		AsyncStorage.getItem('data').then((value) => {
			this.setState({
				'expenses': value,
			})
		}).then(res => {
			if(this.state.expenses != null){
				this.setState({
					dataSource: this.state.dataSource.cloneWithRowsAndSections(this.convertFoodArrayToMap()),	
				})				
			}
		});
	}

	convertFoodArrayToMap(){
		var food = JSON.parse(this.state.expenses);
		var foodCategoryMap = {}; // Create the blank map
		food.forEach(function(foodItem) {
			if (!foodCategoryMap[foodItem.category]) {
			  	// Create an entry in the map for the category if it hasn't yet been created
				foodCategoryMap[foodItem.category] = [];
			} 
			foodCategoryMap[foodItem.category].push(foodItem);
		});
		totalAmount = 0;
		Object.keys(foodCategoryMap).forEach(function(foodItem) {
			amount = 0;
			for(i=0;i < foodCategoryMap[foodItem].length;i++){
				amount += parseFloat(foodCategoryMap[foodItem][i].amount);
			}
			foodCategoryMap[foodItem][0].totalexpense = amount;	
			totalAmount += amount;	
		});
		this.setState({
			totalExpense: totalAmount,
		})
		return foodCategoryMap;
	}

	renderRow(foodItem){
		return (
			<View style={styles.categoryExpenses}>
				<View style={styles.header1}>
					 <Text style={styles.foodRow}>{foodItem.name}</Text> 
				</View>
				<View style={styles.header2}>
						<Text style={styles.foodRow}>{foodItem.amount}</Text>
				</View>
			</View>		
		);
	}

	renderSectionHeader(sectionData, category){
		return(
			<View style={styles.header3}>
				<View style={styles.header1}>
					 <Text style={styles.row}>{category}</Text> 
				</View>
				<View style={styles.header2}>
						<Text style={styles.row}>{sectionData[0].totalexpense}<Icon name="caret-down" size={20} color="black" /></Text>
				</View>
			</View>	
		);
	}

	render() {
		var moment = require('moment');
		var date = moment().format('MMMM Do YYYY, dddd');
		return (	
			<View style={styles.parent}>
			<View style={styles.topContainer}>
				<View style={styles.top1}>
					<View style={styles.header1}>
						<Text style={styles.todayText}>Today</Text>
					</View>
					<View style={styles.header2}>
					<TouchableOpacity onPress={this.navigate.bind(this, "addExpense")}>
						<View style={styles.newExpense} >
							<Icon name="edit" size={20} />
						</View>
					</TouchableOpacity>
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<View style={styles.expenseForToday}>
						<Text style={styles.date}>{date}</Text>
						<Text style={styles.amount}>&#8369;{this.state.totalExpense}</Text>
					</View>
					<View style={styles.expenses}>
					    	<ListView
					            dataSource={this.state.dataSource}
					            renderSectionHeader={this.renderSectionHeader}
					            renderRow={this.renderRow}
			      		/>																				
					</View>
				</View>
			</View>	      
		      </View>
	  	);
	}	
}

module.exports = TodayMain;