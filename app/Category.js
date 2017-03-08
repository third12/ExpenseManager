/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  Button,
  ListView,
  Text,
  StyleSheet,
  View
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class Category extends Component {
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
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          MAR 2017
        </Text>
        <Text style={styles.amount}>
          P 600.00
        </Text>
        <View style={styles.categories}>
          <ListView style={styles.left}
          dataSource={this.state.categories}
          renderRow={(rowData) => <Text style={styles.category}>{rowData}</Text>}/>
          <ListView style={styles.right}
          dataSource={this.state.amounts}
          renderRow={(rowData) => <Text style={styles.categoryAmt}>{rowData}</Text>}/>
        </View>
        <Button
          onPress={onButtonPress}
          title="+ Add New Category"
          color="blue"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    textAlign: 'center',
    fontSize: 20
  },
  amount: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '200'
  },
  categories: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
  },
  left: {
    flex: 2
  },
  right: {
    flex: 1
  },
  category: {
    fontSize: 20,
    paddingTop: 5,
  },
  categoryAmt: {
    fontSize: 20,
    paddingTop: 5,
    paddingRight: 20,
    textAlign: 'right'
  }
});

module.export = Category;
