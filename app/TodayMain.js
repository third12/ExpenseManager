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
			loading: false,
			dataSource: ds.cloneWithRowsAndSections(this.convertFoodArrayToMap()),
		};
	}

	convertFoodArrayToMap(){
		AsyncStorage.getItem('myKey').then((value) => {
			this.setState({'expenses': value});
		}).then(res => {
			this.setState({loading: true});
			if(this.state.expenses != null){
				var food = JSON.parse(this.state.expenses);
			}
			else{
				var food = demoData;
			}			
		});
		var food = demoData;
		var foodCategoryMap = {}; // Create the blank map
		food.forEach(function(foodItem) {
			if (!foodCategoryMap[foodItem.category]) {
			  	// Create an entry in the map for the category if it hasn't yet been created
				foodCategoryMap[foodItem.category] = [];
			} 
			foodCategoryMap[foodItem.category].push(foodItem);
		});
		Object.keys(foodCategoryMap).forEach(function(foodItem) {
			amount = 0;
			for(i=0;i < foodCategoryMap[foodItem].length;i++){
				amount+= foodCategoryMap[foodItem][i].amount;
			}
			foodCategoryMap[foodItem][0].totalexpense = amount;			
		});
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
		console.log(this.state.loading);
		var moment = require('moment');
		var date = moment().format('MMMM Do YYYY, dddd');
		if(this.state.loading == true){
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
						<Text style={styles.amount}>360.00</Text>
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
		else{
			return(
				<View><Text></Text></View>
			);
		}
	}	
}

module.exports = TodayMain;