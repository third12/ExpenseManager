import React, { Component } from 'react';

import {
	AsyncStorage,
  	Button,
  	ListView,
  	StyleSheet,
  	Text,
  	TouchableOpacity,
  	View,
} from 'react-native';

import styles from './js/categorySpecificStyles.js';
import moment from 'moment';
import _ from 'underscore';
import Icon from 'react-native-vector-icons/FontAwesome';

class CategorySpecific extends Component {

	constructor(props) {
		super(props); 
		this.state = {
			expenses: null,
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,}),
		}
		// this.getDaysArray = this.getDaysArray.bind(this);
	}

	componentWillMount(){
		this.setState({
			expenses: this.props.getExpenses(),
			dataSource: this.state.dataSource.cloneWithRows(this.categoryMap()),	
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.expenses!=this.props.getExpenses()){
			this.setState({
				expenses: this.props.getExpenses(),
				dataSource: this.state.dataSource.cloneWithRows(this.categoryMap()),	
			});				
		}
	}

	categoryMap(){
		var specificCategory = this.props.category;
		var categoryData = JSON.parse(this.props.getExpenses());
		var data = [];
		var now = moment().format('DD');
		var todayMonth= moment().format('MMMM YYYY');
		var getByCategory = _.where(categoryData, {category: specificCategory});
		console.log(getByCategory);
		var dateSpecific = _.unique(_.pluck(getByCategory, 'date'));
		var dateSorted = dateSpecific.sort();
		dateSorted.reverse();
		// console.log(dateSorted);
		var sumPerDay = 0;
		var itemsPerDay =[];
		// console.log(dateSpecific);
		dateSorted.forEach(function(item) {
			var getMonth = moment(item, 'MM-DD-YYYY');
			var month = getMonth.format('MMMM YYYY');
			if(month == todayMonth){	
				var dateItems = _.where(categoryData, {category: specificCategory, date:item});
					// console.log(dateItems);					
				dateItems.forEach(function(dateItem) {
					sumPerDay+=parseInt(dateItem.amount);	
					itemsPerDay.push({
						name: dateItem.name,
						amount: parseInt(dateItem.amount)
					});			
				});
				// console.log(itemsPerDay);
					
				var dayData ={
					date: item,
					total: sumPerDay,
					items: itemsPerDay
				}
				// console.log(dayData);
				sumPerDay = 0;
				itemsPerDay = [];
			}
			data.push(dayData);
		});
		// console.log(data);
		return data;
	}

	renderSeparator(sectionId, rowId) {
	    return (
	      <View key={rowId} style={styles.separator} />
	    )
	}

	renderRow(categoryItem){
		var dt = moment(categoryItem.date, "MM-DD-YYYY HH:mm:ss")
		day = dt.format('ddd');
		// console.log(categoryItem.items);
		return (
			<View>
				<View style={styles.header3}>
					<View style={styles.header1}>
						 <Text style={styles.row}>{categoryItem.date} - {day}</Text> 
					</View>
					<View style={styles.header2}>
						<Text style={styles.row}>₱ {categoryItem.total}.00<Icon name="caret-down" size={20} color="black" /></Text>
					</View>
				</View>			
			    <View>
			      	{this.renderItems(categoryItem.items)}
			    </View>
			</View>    
		);
	}

renderItems(items) {
		// console.log(items);
	return items.map(function(item, i){
	    return(
	    	<View key={i} style={styles.categoryExpenses}>
				<View style={styles.header1}>
					<Text style={styles.foodRow}>{item.name}</Text> 
				</View>
				<View style={styles.header2}>				
					<Text style={styles.foodRow}>₱{item.amount}.00</Text>
				</View>
			</View>	
	    );
	 });
}

render() {
	var content = null;
	var specificCategory = this.props.category;
	var today= moment().format('MMMM YYYY');
	if (this.props.getExpenses() !== null) {

		var date = moment().format('MMMM Do YYYY, dddd');
		var categoryData = JSON.parse(this.props.getExpenses());
		var dates = _.unique(_.pluck(categoryData, 'date'));
		categorySum = 0;
		dates.forEach(function(data) {
			var getMonth = moment(data, 'MM-DD-YYYY');
			var month = getMonth.format('MMMM YYYY');

			if(month == today){
				var monthlySum = _.where(categoryData, {date: data, category: specificCategory});
				monthlySum.forEach(function(date) {
					categorySum+=parseInt(date.amount);
				});
				// console.log(categorySum);
			}		
		});

		content = (
			<View style={styles.parent}>
				<View style={styles.topContainer}>
		          	<View style={styles.top1}>
		            	<TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
			            	<View style={styles.leftArrow}>
			                	<Icon name="chevron-left" size={25} color='black' />    
			            	</View>
		            	</TouchableOpacity>
			            <View style={styles.header2}>
			              	<Text style={styles.todayText}>{specificCategory}</Text>
			            </View>
		          </View>

				</View>
				
				<View style={styles.bottomContainer}>
					<View style={styles.expenseForToday}>
						<Text>{today}</Text>
						<Text style={styles.amount}>P {categorySum}.00</Text>
					</View>
					<View style={styles.expenses}>
						<ListView
							dataSource={this.state.dataSource}
							renderRow={this.renderRow.bind(this)}
							renderSeparator={this.renderSeparator}							
						/>  
																		
					</View>
				</View>
			</View>
		);

	} else{
		content = (
			<View style={styles.parent}>
				<View style={styles.topContainer}>
		          	<View style={styles.top1}>
		            	<TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
			            	<View style={styles.leftArrow}>
			                	<Icon name="chevron-left" size={25} color='black' />    
			            	</View>
		            	</TouchableOpacity>
			            <View style={styles.header2}>
			              	<Text style={styles.todayText}>{specificCategory}</Text>
			            </View>
		          </View>

				</View>
				
				<View style={styles.bottomContainer}>
					<View style={styles.expenseForToday}>
						<Text>{today}</Text>
						<Text style={styles.amount}>P 0.00</Text>
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

module.exports = CategorySpecific;