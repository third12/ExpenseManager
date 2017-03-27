import React, { Component } from 'react';
import styles from './js/todaystyles.js';
import {
  Text,
  StyleSheet,
  View,
  Navigator,
  Picker,
  TextInput,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddExpense extends Component {
	navigate(routeName){
		this.props.navigator.push({
			name: routeName,
			setCategory: this.setCategory,
		});
	}	
	constructor(props){
		super(props);
		this.state = {
			pricePlaceholder: 'Price',
			descriptionPlaceholder: 'Description',
			chosenCategory: 'Category',
			myKey: [],			
		}	
		this.setCategory = this.setCategory.bind(this);
		this.onButtonPress = this.onButtonPress.bind(this);
		this.saveData = this.saveData.bind(this);
	}

	setCategory(item){
		this.setState({chosenCategory: item});
	}

	componentDidMount(){
		// AsyncStorage.clear();
	}

	saveData(expense){
		AsyncStorage.getItem('myKey').then((value) => {
			this.setState({'myKey': value});
		}).then(res => {
			console.log(this.state.myKey);
			if(this.state.myKey == null){
				expenses = [];
				expenses.push(expense);
				AsyncStorage.setItem('myKey', JSON.stringify(expenses));
			}
			else{
				expenses = this.state.myKey;
				expenses = JSON.parse(expenses);
				expenses.push(expense)
				AsyncStorage.setItem('myKey', JSON.stringify(expenses));
			}
		});
	}

	onButtonPress(){
		var price = this.state.pricePlaceholder;
		var description = this.state.descriptionPlaceholder;
		var category = this.state.chosenCategory;
		var expense ={
			name: description,			
			amount: price,
			category: category
		};
		this.saveData(expense);
		// Alert.alert('Button has been pressed!');
	}

	render(){
		return(
			<View style={styles.parent}>
			<View style={styles.topContainer}>
				<View style={styles.top1}>
					<TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
					<View style={styles.leftArrow}>
							<Icon name="chevron-left" size={25} color='black' />		
					</View>
					</TouchableOpacity>
					<View style={styles.header2}>
						<Text style={styles.todayText}>Add your expense</Text>
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<Text>{this.state.myKey}</Text>
					<View style={styles.TextInputContainer}>				
						<TextInput
							underlineColorAndroid="transparent"
							style={styles.TextInput}
							onChangeText={(pricePlaceholder) => this.setState({pricePlaceholder})}
							value={this.state.pricePlaceholder}
						/>
						<TextInput
							underlineColorAndroid="transparent"
							style={styles.TextInput}
							onChangeText={(descriptionPlaceholder) => this.setState({descriptionPlaceholder})}
							value={this.state.descriptionPlaceholder}
						/>
						<TouchableOpacity onPress={this.navigate.bind(this, "chooseCategory")}>
						<View style={styles.CategoryPicker}>
							<View style={styles.header1}>
								 <Text style={styles.TextCategory}>{this.state.chosenCategory}</Text> 
							</View>
							<View style={styles.header2}>
									<Text style={styles.TextCategory}>
										<Icon name="chevron-right" size={25} color='black'/>
									</Text>
							</View>
						</View>
						</TouchableOpacity>
						<View style={styles.button}>
						<Button
							onPress={this.onButtonPress}
							title="Save"
							color="grey"
						/>
						</View>				
					</View>
				</View>
			</View>	      
		      </View>
		);
	}
}

module.exports = AddExpense;