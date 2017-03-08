import React, { Component } from 'react';

import {
  Text,
  Image,
  ListView,
  StyleSheet,
  View
} from 'react-native';

import styles from './js/styles.js'
import Icon from 'react-native-vector-icons/FontAwesome';

class Month extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      categories: ds.cloneWithRows([
        '17 - Fri', '16 - Thu', '15 - Wed', '14 - Tue', '13 - Mon', '12 - Sun', '11 - Sat', '10 - Fri'
      ]),
      amounts: ds.cloneWithRows([
          100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00,100.00,
      ])
    };
  }

  render() {
    return (
		<View style={styles.parent}>
			<View style={styles.child1}>
				<Text style={styles.textstyle1}> March 2017 </Text>
				<Text style={styles.textstyle1}> 3000.00 </Text>
			</View>
			<View style={styles.list}>
	          <ListView
	          dataSource={this.state.categories}
	          renderRow={(rowData) => <Text style={styles.left}>{rowData}</Text>}/>
	          <ListView 
	          dataSource={this.state.amounts}
	          renderRow={(rowData) => <Text style={styles.right}>{rowData}</Text>}/>
			</View>
		</View>
    );
  }
}

module.exports = Month;