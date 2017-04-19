import React, { Component } from 'react';
import styles from './js/todaystyles.js';
import {
  Text,
  StyleSheet,
  View,
  Navigator,
  Picker,
  TextInput,
  ListView,
  TouchableOpacity,
  AsyncStorage,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'underscore';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class ChooseCategory extends Component {
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			categorylist: [
				'Food', 'Home', 'Personal Care', 'Savings', 'School', 'Transportation'
			],
			categories: ds,
			data: null
		}
		this.onPressRow = this.onPressRow.bind(this);
	}

	componentWillMount(){
				var categorylist = this.state.categorylist;
				var data = JSON.parse(this.props.getCategories());
				var categoryItems = _.unique(_.pluck(data, 'category'));
				
				categoryItems.forEach(function(item) {
					console.log(item);
					categorylist.push(item);
				});

		this.setState({
			data: this.props.getCategories(),
			categories: this.state.categories.cloneWithRows(categorylist),	
		});						
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.data!=this.props.getCategories()){
				var categorylist = this.state.categorylist;
				var data = JSON.parse(this.props.getCategories());
				var categoryItems = _.unique(_.pluck(data, 'category'));
				
				categoryItems.forEach(function(item) {
					console.log(item);
					categorylist.push(item);
				});
				
				this.setState({
					data: this.props.getCategories(),
					categories: this.state.categories.cloneWithRows(categorylist),	
				})				
		}
	}

	onPressRow(item){
		this.props.setCategory(item);
		this.props.navigator.pop();
	}

	render(){
		return(
			<View style={styles.parent}>
				<View style={styles.topContainer}>
					<View style={styles.top1}>
						<TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
						<View style={styles.leftArrow}>
								<Icon name="chevron-left" size={25} color='black'/>
						</View>
						</TouchableOpacity>
						<View style={styles.header2}>
							<Text style={styles.todayText}>Choose a category</Text>
						</View>
					</View>
					<View style={styles.bottomContainer}>		
						<ListView
							dataSource={this.state.categories}
							renderRow={(rowData) =>
								<View style={styles.categoryExpenses}>
									<TouchableOpacity onPress={ ()=>{ this.onPressRow(rowData) }}>
									<Text style={styles.categories}>{rowData}</Text>
									</TouchableOpacity>
								</View>
							}
						/>
					</View>					
				</View>
		      </View>
		);
	}
}

module.exports = ChooseCategory;
