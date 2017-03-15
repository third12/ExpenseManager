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
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class ChooseCategory extends Component {
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			categories: ds.cloneWithRows([
				'Food', 'Home', 'Personal Care', 'Savings', 'School', 'Transportation'
			]),
		}	
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
									<TouchableOpacity onPress={ ()=>{ this.props.navigator.pop(); console.log('haha'); }}>
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