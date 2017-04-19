/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  ActivityIndicator,
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import TodayMain from './TodayMain.js'
import MonthMain from './MonthMain.js'
import CategoryMain from './CategoryMain.js'
import FontAwesomeTabBar from './FontAwesomeTabBar.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class ScrollableTab extends Component {

  constructor(props){
    super(props);
    this.state = {
      expenses: null,
      categories: JSON.stringify([]),
    }
    this.saveData = this.saveData.bind(this);      
    this.saveCategory = this.saveCategory.bind(this);      
    this.getExpenses = this.getExpenses.bind(this);      
    this.getCategories = this.getCategories.bind(this);      
  }

  componentDidMount() {
    AsyncStorage.getItem('data').then((value) => {
      if(value){
        this.setState({
          'expenses': value,
        })
      }else{
        this.setState({
          'expenses': JSON.stringify([]),
        })        
      }
    });

    AsyncStorage.getItem('categorydata').then((value) => {
      // console.log(value);
      if(value){
        this.setState({
          'categories': value,
        })
      }else{
        this.setState({
          'categories': JSON.stringify([]),
        })        
      }
    });
  }

  render() {
    if(this.state.expenses){
    return (
      <ScrollableTabView 
      	tabBarPosition = 'bottom'
      	renderTabBar = {() => <FontAwesomeTabBar />}
      >
      	<TodayMain navigator={this.props.navigator} getExpenses={this.getExpenses} getCategories={this.getCategories} saveData={this.saveData} tabLabel='clock-o' />
      	<CategoryMain navigator={this.props.navigator} getExpenses={this.getExpenses} saveCategory={this.saveCategory} getCategories={this.getCategories} tabLabel='list' />
      	<MonthMain navigator={this.props.navigator} getExpenses={this.getExpenses} tabLabel='calendar' />
    	</ScrollableTabView>
    );
    }else{
      return(
        <ActivityIndicator color='#5ccdcd'
        size='large'
        /> 
        );
    }
  }

  getExpenses(){
    return this.state.expenses;
  }

  getCategories(){
    return this.state.categories;
  }


  saveData(expense){
    let expenses = this.state.expenses;
    expenses = JSON.parse(expenses);
    expenses.push(expense);
    AsyncStorage.setItem('data', JSON.stringify(expenses));
    this.setState({
      expenses:JSON.stringify(expenses),
    });
  }

  saveCategory(category){
    let categories = this.state.categories;
    categories = JSON.parse(categories);
    categories.push(category);
    // console.log(category);
    AsyncStorage.setItem('categorydata', JSON.stringify(categories));
    this.setState({
      categories:JSON.stringify(categories),
    });
  }

}

module.exports = ScrollableTab;