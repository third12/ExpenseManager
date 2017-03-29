import React, { Component } from 'react';

import {
  AsyncStorage,
  ActivityIndicator,
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
import _ from 'underscore';

class MonthMain extends Component {

  navigate(routeName,day) {
    this.props.navigator.push({
      name: routeName,
      day: day
    });
  }

  constructor(props) {
      super(props);

      this.state = {
        monthTotal: 0,
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        data: null,
        isLoading: false
      };
      this.getDaysArray = this.getDaysArray.bind(this);      
      this.renderRow = this.renderRow.bind(this);      
      this.getDayTotal = this.getDayTotal.bind(this);      
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
          console.log(this.state.data);
          var jdata = this.state.data;
          var currentmonth = moment().utcOffset("+08:00").format('M');
          var year = new Date().getFullYear();
          var daysArray = this.getDaysArray(year,currentmonth);

          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(daysArray),
            isLoading: false
          });
        }
        else{
            console.log('lol');
        }     
      });
    }

    getDayTotal(day){

        var dayta = this.state.data;
        var total = 0;
        var dayMap = {}; 
        var dateData = _.where(dayta, {date: day});
        var dateAmount = _.pluck(dateData, 'amount');
        console.log(dateAmount);
        for(var i=0; i<dateAmount.length;i++){
          total = total + parseInt(dateAmount[i]);
        }
        
        return total;

    }

    getDaysArray(year, month) {
        var names = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
        var currentday = moment().utcOffset("+08:00").format('D');
        var date = new Date(year, month-1, currentday);
        var total = 0;
        console.log(date);
        var result = [];
        while (date.getMonth() == month-1) {
          var newdate = date.getDate()+" - "+names[date.getDay()];
          var day = month+'/'+date.getDate()+'/'+year;
          var amount = this.getDayTotal(day);
          var r = {date: newdate, amount: amount, day:day};
          result.push(r);
          date.setDate(date.getDate()-1);
          total = total + amount;
        }
        this.setState({monthTotal: total });
        return result;

    }

  render() {
    var content = null;
    console.log('lo');
    if (this.state.data !== null) {
    console.log(this.state.isLoading);
      var date = moment().format('MMMM YYYY');
      content = (
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
              <Text style={styles.amount}>₱ {this.state.monthTotal.toFixed(2)}</Text>
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

    } else if (this.state.isLoading){
      content = (
        <ActivityIndicator color='#5ccdcd'
        size='large'
        style={styles.loading}
        /> 
      );
    }
    return (
      <View style={styles.parent}> 
        {content}
      </View>
    );
  }

  renderRow(data){
    return (
      <TouchableOpacity onPress={this.navigate.bind(this, "DaySelected",data.day)}>
        <View style={styles.row}>
         <Text style={styles.leftcolumn} >{data.date}</Text>
         <Text style={styles.rightcolumn} >{data.amount}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

module.exports = MonthMain;