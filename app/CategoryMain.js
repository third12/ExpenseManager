import React, { Component } from 'react';

import {
	ActivityIndicator,
	AsyncStorage,
	Button,
	ListView,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';

import styles from './js/categoryStyles.js';
import moment from 'moment';
import _ from 'underscore';
import Icon from 'react-native-vector-icons/FontAwesome';

class CategoryMain extends Component {
	navigate(routeName) {
		this.props.navigator.push({
			name: routeName,
			saveCategory: this.props.saveCategory,
		});
	}
	constructor(props) {
		super(props); 
		this.state = {
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,}),
			expenses: this.props.getExpenses(),
		}
		this.onPressRow = this.onPressRow.bind(this);
	}


	componentWillMount(){
		this.setState({
			expenses: this.props.getExpenses(),
			dataSource: this.state.dataSource.cloneWithRows(this.categoryMap()),	
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.expenses!=this.props.getExpenses()){
			// console.log('update'+this.props.getExpenses());
			this.setState({
				expenses: this.props.getExpenses(),
				dataSource: this.state.dataSource.cloneWithRows(this.categoryMap()),	
			});				
		}
	}

	categoryMap(){
		var today= moment().format('MMMM YYYY');

		var data = [];
		var categoryData = JSON.parse(this.props.getExpenses());
		var categories = _.unique(_.pluck(categoryData, 'category')).sort();

		categories.forEach(function(category) {
			var categoryItems = _.where(categoryData, {category: category});
			// console.log(categoryItems);		
			var sum = 0;
			categoryItems.forEach(function(item) {
				var getMonth = moment(item.date, 'MM-DD-YYYY');
				var month = getMonth.format('MMMM YYYY');
				if(month == today){
					sum+=parseInt(item.amount);
				}
			 });
			 var c = {
				category: category,
				amount: sum
			 }
			 data.push(c);
		});
		// console.log(data);
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
					<Text style={styles.right}>₱{categoryItem.amount}.00</Text>
				</View>
			</TouchableOpacity>    
		);
	}

	onPressRow(category) {
		this.props.navigator.push({
			name: 'categorySpecific',
			category: category,
			getExpenses: this.props.getExpenses,
		})
		// console.log(category);
	}

	renderSeparator(sectionId, rowId) {
	    return (
	      <View key={rowId} style={styles.separator} />
	    )
	}

	render() {
		var content = null;
		if (this.props.getExpenses() !== null) {

			var moment = require('moment');
			var today= moment().format('MMMM YYYY');
			var categoryData = JSON.parse(this.props.getExpenses());
			// console.log(categoryData);
			var dates = _.unique(_.pluck(categoryData, 'date'));

			monthSum = 0;
			dates.forEach(function(data) {
				var getMonth = moment(data, 'MM-DD-YYYY');
				var month = getMonth.format('MMMM YYYY');

				if(month == today){
					var monthlySum = _.where(categoryData, {date: data});
					monthlySum.forEach(function(date) {
						monthSum+=parseInt(date.amount);
					});
				}		
			});

			content = (
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
						<Text style={styles.amount}>₱{monthSum}.00</Text>
					</View>
					<View style={styles.expenses}>
						<View style={styles.header3}>
							<ListView
									dataSource={this.state.dataSource}
									renderRow={this.renderRow.bind(this)}
									renderSeparator={this.renderSeparator}
									enableEmptySections={true}							
							/>                
						</View>                            
					</View>
				</View>
					
				</View>
			);

		} else{
      		content = (
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
						<Text style={styles.amount}>₱0.00</Text>
					</View>
				</View>
					
				</View>
     		 );
    	}

		return (
			<View style={styles.parent}> 
				{content}
			</View>
		);
	}
}

module.exports = CategoryMain;