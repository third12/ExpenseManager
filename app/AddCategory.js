import React, { Component } from 'react';

import {
	AsyncStorage,
  	Button,
  	Navigator,
  	Text,
  	TextInput,
  	TouchableOpacity,
  	View,
} from 'react-native';

import styles from './js/categoryStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddCategory extends Component {
  	constructor(props){
    	super(props);
    	this.state = {
    		categoryPlaceholder: 'Category Name',
     		categories: []     
   		} 
	    this.onButtonPress = this.onButtonPress.bind(this);
  	}
  	componentDidMount(){
		// AsyncStorage.clear();
	}
  	onButtonPress(){
		var category = this.state.categoryPlaceholder;
		console.log(category);
		categoryData = {category: category};
		this.props.saveCategory(categoryData);
		this.props.navigator.pop();
	}

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
	              		<Text style={styles.todayText}>Add Category</Text>
	            	</View>
          		</View>
        	</View>
	        <View style={styles.bottomContainer}>      
	          	<TextInput
	            	style={styles.input}
	            	placeholder="Category"
	            	onChangeText={(categoryPlaceholder) => this.setState({categoryPlaceholder})}
	          	/>
	          	<View style={styles.button}>
	            	<Button onPress={this.onButtonPress} title="Save" color="gray"/>
	          	</View>   
	          	<Text>{this.state.categories}</Text>    
	        </View>
      </View>

    );
  }
}

module.exports = AddCategory;