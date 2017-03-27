import React, { Component } from 'react';

import {
	Button,
	ListView,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';

import categoryData from './dataCategory.js';
import styles from './js/categoryStyles.js';
import moment from 'moment';
import _ from 'underscore';
import Icon from 'react-native-vector-icons/FontAwesome';

class CategoryMain extends Component {
	navigate(routeName) {
		this.props.navigator.push({
			name: routeName,
		});
	}
	constructor(props) {
		super(props); 
		this.state = {
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,}),
		}
		this.onPressRow = this.onPressRow.bind(this);
	}
	initData(){
		
	}
	componentDidMount() {
		this.setState({dataSource: this.state.dataSource.cloneWithRows(this.categoryMap())})
	}
	categoryMap(){
		var today= moment().format('MMMM YYYY');

		var data = [];
		var categories = _.unique(_.pluck(categoryData, 'category'));

		categories.forEach(function(category) {
			var categoryItems = _.where(categoryData, {category: category});
			// console.log(categoryItems);		
			var sum = 0;
			categoryItems.forEach(function(item) {
				var getMonth = moment(item.date, 'YYYY/MM/DD');
				var month = getMonth.format('MMMM YYYY');
				if(month == today){
					sum+=item.amount;
				}
			 });
			 var c = {
				category: category,
				amount: sum
			 }
			 data.push(c);
		});
		return data;	 
	}
	renderRow(categoryItem){
		return (
			<TouchableOpacity 
				style={styles.categoryExpenses}
			  	onPress={() => this.onPressRow(categoryItem.category)}>
				<View style={styles.header1}>
					<Text style={styles.left}>{categoryItem.category}</Text> 
				</View>
				<View style={styles.header2}>
					<Text style={styles.right}>P{categoryItem.amount}.00</Text>
				</View>
			</TouchableOpacity>    
		);
	}

	onPressRow(category) {
		this.props.navigator.push({
			name: 'categorySpecific',
			category: category
		})
		console.log(category);
	}

	renderSeparator(sectionId, rowId) {
	    return (
	      <View key={rowId} style={styles.separator} />
	    )
	}

	render() {
		var moment = require('moment');
		var today= moment().format('MMMM YYYY');
		var dates = _.unique(_.pluck(categoryData, 'date'));

		monthSum = 0;
		dates.forEach(function(data) {
			var getMonth = moment(data, 'YYYY/MM/DD');
			var month = getMonth.format('MMMM YYYY');

			if(month == today){
				var monthlySum = _.where(categoryData, {date: data});
				monthlySum.forEach(function(date) {
					monthSum+=date.amount;
				});
			}		
		});

		return (
			<View style={styles.parent}> 
				<View style={styles.topContainer}>
					<View style={styles.top1}>
						<View style={styles.header1}><Text style={styles.todayText}>Category</Text></View>
						<View style={styles.header2}>
					<TouchableOpacity onPress={this.navigate.bind(this, "addCategory")}>
						<View style={styles.newExpense} >
							<Icon name="plus" size={20} />
						</View>
					</TouchableOpacity>              
						</View>
					</View>

				</View>
				<View style={styles.bottomContainer} >
					<View style={styles.expenseForToday}>
						<Text>{today}</Text>
						<Text style={styles.amount}>P{monthSum}.00</Text>
					</View>
					<View style={styles.expenses}>
						<View style={styles.header3}>
							<ListView
									dataSource={this.state.dataSource}
									renderRow={this.renderRow.bind(this)}
									renderSeparator={this.renderSeparator}							
							/>                
						</View>                            
					</View>

				</View>
			</View>
		);
	}
}

module.exports = CategoryMain;