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
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class AddExpense extends Component {
	navigate(routeName){
		this.props.navigator.push({
			name: routeName
		});
	}	
	constructor(props){
		super(props);
		this.state = {
			pricePlaceholder: 'Price',
			descriptionPlaceholder: 'Description',
			categoryPlaceholder: 'Category',
		}	
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
								 <Text style={styles.TextCategory}>Category</Text> 
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
							onPress={onButtonPress}
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