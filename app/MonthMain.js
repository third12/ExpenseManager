import React, { Component } from 'react';

import {
  Button,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './js/monthStyles.js';
import data from './data.js';
import moment from 'moment';
import _ from 'underscore-node';

class MonthMain extends Component {
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  constructor(props) {
      super(props);

      this.state = {
        monthTotal: 0,
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      };

      this.getDaysArray = this.getDaysArray.bind(this);      
      this.renderRow = this.renderRow.bind(this);      
      this.getDayTotal = this.getDayTotal.bind(this);      

    }

    componentDidMount() {
      var currentmonth = moment().format('M');
      var daysArray = this.getDaysArray(2017,currentmonth);
      this.setState({dataSource: this.state.dataSource.cloneWithRows(daysArray)});
    }

    getDayTotal(day){
      var dayta = data;
      var total = 0;
      var dayMap = {}; // Create the blank map
      var dateData = _.where(dayta, {date: day});
      var dateAmount = _.pluck(dateData, 'amount');

      for(var i=0; i<dateAmount.length;i++){
        total = total + dateAmount[i];
      }
      
      return total;
    }

    getDaysArray(year, month) {
      var names = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
      var currentday = moment().format('D');
      var date = new Date(year, month-1, currentday);
      var total = 0;
      console.log(date);
      var result = [];
      while (date.getMonth() == month-1) {
        var newdate = date.getDate()+" - "+names[date.getDay()];
        var day = month+'/'+date.getDate()+'/'+year;
        var amount = this.getDayTotal(day);
        var r = {date: newdate, amount: amount};
        result.push(r);
        date.setDate(date.getDate()-1);
        total = total + amount;
      }
      this.setState({monthTotal: total });
      return result;
    }

  render() {
    var date = moment().format('MMMM YYYY');

    return (

    <View style={styles.parent}> 
      <View style={styles.topContainer}>
        <View style={styles.top1}>
          <View style={styles.header1}><Text style={styles.monthText}>Month</Text></View>
          <View style={styles.header2}>
          </View>
        </View>
      </View>
      
      <View style={styles.bottomContainer}>
        <View style={styles.expenseForMonth}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.amount}>{this.state.monthTotal}</Text>
        </View>
        
        <View style={styles.expenses}>
          <View style={styles.monthExpenses}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => this.renderRow(rowData)}/>
          </View>                           
        </View>
      
      </View>
    </View>
    );
  }

  renderRow(data){
    return (
      <TouchableOpacity onPress={this.navigate.bind(this, "DaySelected")}>
        <View style={styles.row}>
         <Text style={styles.leftcolumn} >{data.date}</Text>
         <Text style={styles.rightcolumn} >{data.amount}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

module.exports = MonthMain;