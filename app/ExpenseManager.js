import React, { Component } from 'react';

import {
  AppRegistry,
  BackAndroid,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import TodayMain from './TodayMain.js';
import MonthMain from './MonthMain.js';
import DaySelected from './DaySelected.js';
import AddExpense from './AddExpense.js';
import ChooseCategory from './ChooseCategory.js';
import CategoryMain from './CategoryMain.js';
import AddCategory from './AddCategory.js';
import CategorySpecific from './CategorySpecific.js';
import ScrollableTab from './ScrollableTab.js';
import FontAwesomeTabBar from './FontAwesomeTabBar.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class ExpenseManager extends Component {

  constructor(props){
    super(props);
    this.navigator = null;

    this.handleBack = (() => {
      console.log(this.navigator.getCurrentRoutes());
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1){
        this.navigator.pop();
        return true; //avoid closing the app
      }

      return false; //close the app
    }).bind(this)
  }



  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
  }

  render() {
    return (  
      <Navigator
          initialRoute={{ name: 'scrollableTab' }}
          renderScene={this.renderScene.bind(this)}
         ref={navigator => {this.navigator = navigator}}
      />
      );
  }

  renderScene(route, navigator) {
    console.log(route);
    if(route.name == 'scrollableTab') {
      return <ScrollableTab navigator={navigator}/>
    }
    if(route.name == 'todayMain') {
      return <TodayMain navigator={navigator}/>
    }
    if(route.name == 'addExpense') {
      return <AddExpense navigator={navigator} saveData={route.saveData} getCategories={route.getCategories}/>
    }
    if(route.name == 'chooseCategory') {
      return <ChooseCategory navigator={navigator} setCategory={route.setCategory} getCategories={route.getCategories}/>
    }
    if(route.name == 'categoryMain') {
      return <CategoryMain navigator={navigator}/>
    }  
    if(route.name == 'addCategory') {
      return <AddCategory navigator={navigator} saveCategory={route.saveCategory} getCategories={route.getCategories}/>
    } 
    if(route.name == 'categorySpecific') {
      return <CategorySpecific navigator={navigator} category={route.category} getExpenses={route.getExpenses} />
    } 
    if(route.name == 'MonthMain') {
      return <MonthMain navigator={navigator}/>
    }   
    if(route.name == 'DaySelected') {
      return <DaySelected navigator={navigator} day={route.day} getExpenses={route.getExpenses} />
    }
  }
}

module.exports = ExpenseManager;