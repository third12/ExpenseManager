import React, { Component } from 'react';

import {
  Button,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './js/monthStyles.js';

class MonthMain extends Component {
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
            '17 - Fri', '16 - Thu', '15 - Wed', '14 - Tue', '13 - Mon', '12 - Sun'
        ]),
        amounts: ds.cloneWithRows([
            100.00, 100.00, 100.00, 100.00, 100.00, 100.00,
        ])
      };
      this.getDaysArrayByMonth = this.getDaysArrayByMonth.bind(this);
      this.getDaysArray = this.getDaysArray.bind(this);      
    }

    getDaysArrayByMonth() {
      var moment = require('moment');
      var daysInMonth = moment().daysInMonth();
      var arrDays = [];

      while(daysInMonth) {
        var current = moment().date(daysInMonth);
        arrDays.push(current);
        daysInMonth--;
      }

      var schedule = arrDays;
      schedule.forEach(function(item) {
        console.log(item.format("DD/MM"));
      });
    }

    getDaysArray(year, month) {
      var names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
      var date = new Date(year, month-1, 1);
      var result = [];
      while (date.getMonth() == month-1) {
        result.push(date.getDate()+"-"+names[date.getDay()]);
        date.setDate(date.getDate()+1);
      }
      console.log(result);

    }

  render() {
    var moment = require('moment');
    var date = moment().format('MMMM YYYY');
    this.getDaysArray(2017,3);
    return (

    <View style={styles.parent}> 
      <View style={styles.topContainer}>
        <View style={styles.top1}>
          <View style={styles.header1}><Text style={styles.todayText}>Month</Text></View>
          <View style={styles.header2}>
          </View>
        </View>
      </View>
      
      <View style={styles.bottomContainer}>
        <View style={styles.expenseForToday}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.amount}>360.00</Text>
        </View>
        
        <View style={styles.expenses}>
          <View style={styles.categoryExpenses}>

                  <ListView
                    dataSource={this.state.categories}
                    renderRow={(rowData) => <Text style={styles.leftcolumn} onPress={this.navigate.bind(this, "DaySelected")}>{rowData}</Text>}/>
                
                  <ListView
                    dataSource={this.state.amounts}
                    renderRow={(rowData) => <Text style={styles.rightcolumn} onPress={this.navigate.bind(this, "DaySelected")}>100.00</Text>}/>

          </View>                           
        </View>
      
      </View>
    </View>
    );
  }
}

module.exports = MonthMain;