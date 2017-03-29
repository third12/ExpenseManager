import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Button,
  Alert,
  View,
  Navigator,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

import demoData from './data.js';
import styles from './js/todaystyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import _ from 'underscore';

class DaySelected extends Component {

  constructor(props){
    super(props);
    console.log(this.props.day);
    const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
          sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    
    this.state = {
      day: this.props.day,
      monthTotal: 0,
      expenses: 'expenses',
      dataSource: ds,
      isLoading: false,
      data:null,
    };

      this.convertFoodArrayToMap = this.convertFoodArrayToMap.bind(this);   
      this.renderRow = this.renderRow.bind(this);
      this.renderSectionHeader = this.renderSectionHeader.bind(this);   
  }

  componentDidMount() {

    this.setState({
      isLoading: true
    });

    AsyncStorage.getItem('data').then((value) => {
        var getData = JSON.parse(value);
        this.setState({
          data: getData,
        });
        console.log(value);
    }).then(res => {
      console.log(res);
      if(this.state.data != null){
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(this.convertFoodArrayToMap()),
          isLoading: false
        });
      }
      else{
          console.log('lol');
      }     
    });
  }

  convertFoodArrayToMap(){

    var food = this.state.data;
    var total = 0;
    food = _.where(food, {date: this.props.day});
    console.log(food);

    var foodCategoryMap = {}; // Create the blank map
    food.forEach(function(foodItem) {
      if (!foodCategoryMap[foodItem.category]) {
          // Create an entry in the map for the category if it hasn't yet been created
        foodCategoryMap[foodItem.category] = [];
      } 
      foodCategoryMap[foodItem.category].push(foodItem);
    });
    Object.keys(foodCategoryMap).forEach(function(foodItem) {
      amount = 0;
      for(i=0;i < foodCategoryMap[foodItem].length;i++){
        amount+= parseInt(foodCategoryMap[foodItem][i].amount);
      }
      foodCategoryMap[foodItem][0].totalexpense = amount;  
      total = total + parseInt(amount);   
    });
    this.setState({monthTotal: total });
    return foodCategoryMap;
  }

  renderRow(foodItem){
    return (
      <View style={styles.categoryExpenses}>
        <View style={styles.header1}>
           <Text style={styles.foodRow}>{foodItem.name}</Text> 
        </View>
        <View style={styles.header2}>
            <Text style={styles.foodRow}>{parseInt(foodItem.amount).toFixed(2)}</Text>
        </View>
      </View>   
    );
  }

  renderSectionHeader(sectionData, category){
    return(
      <View style={styles.header3}>
        <View style={styles.header1}>
           <Text style={styles.row}>{category}</Text> 
        </View>
        <View style={styles.header2}>
            <Text style={styles.row}>{sectionData[0].totalexpense.toFixed(2)}<Icon name="caret-down" size={20} color="black" /></Text>
        </View>
      </View>   
    );
  }

  render() {
    var str = this.state.day;
    console.log(str);

    var date = moment(str, "MM-DD-YYYY").format('MMMM D YYYY, dddd');
    if(this.state.data!=null){
    return (  
      <View style={styles.parent}>
      <View style={styles.topContainer}>
        <View style={styles.top1}>
          <TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
          <View style={styles.leftArrow}>
              <Icon name="chevron-left" size={25} color='black' />    
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.expenseForToday}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.amount}>₱ {this.state.monthTotal.toFixed(2)}</Text>
          </View>
          <View style={styles.expenses}>
                <ListView
                      dataSource={this.state.dataSource}
                      renderSectionHeader={this.renderSectionHeader}
                      renderRow={this.renderRow}
                />                                        
          </View>
        </View>
      </View>       
          </View>
      );
    }
    else{
      return(
        <ActivityIndicator color='#5ccdcd'
        size='large'
        style={styles.loading}
        /> 
      );
    }
  }
}

module.exports = DaySelected;