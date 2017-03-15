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

import styles from './js/categoryStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class CategoryMain extends Component {
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        categories: ds.cloneWithRows([
            'Food', 'Home', 'Personal Care', 'Savings', 'School', 'Transportation'
        ]),
        amounts: ds.cloneWithRows([
            100.00, 100.00, 100.00, 100.00, 100.00, 100.00,
        ])
      };
    }

  render() {
    var moment = require('moment');
    var date = moment().format('MMMM YYYY');

    return (
      <View style={styles.parent}> 
        <View style={styles.topContainer}>
          <View style={styles.top1}>
            <View style={styles.header1}><Text style={styles.todayText}>Category</Text></View>
            <View style={styles.header2}>
          <TouchableOpacity onPress={this.navigate.bind(this, "addCategory")}>
            <View style={styles.newExpense} >
              <Icon name="edit" size={20} />
            </View>
          </TouchableOpacity>              
            </View>
          </View>

        </View>
        <View style={styles.bottomContainer} >
          <View style={styles.expenseForToday}>
            <Text>{date}</Text>
            <Text style={styles.amount}>360.00</Text>
          </View>
          <View style={styles.expenses}>
            <View style={styles.header3}>
                  <ListView style={styles.left}
                    dataSource={this.state.categories}
                    renderRow={(rowData) => <Text style={styles.row}  onPress={this.navigate.bind(this, "categorySpecific")}>{rowData}</Text>}/>
                
                  <ListView style={styles.right}
                    dataSource={this.state.amounts}
                    renderRow={(rowData) => <Text style={styles.row2}  onPress={this.navigate.bind(this, "categorySpecific")}>{rowData}</Text>}/>
    
            </View>                            
          </View>

        </View>
      </View>
    );
  }
}

module.exports = CategoryMain;