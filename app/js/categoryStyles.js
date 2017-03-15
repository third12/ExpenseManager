'use strict'

import {
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  
  topContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#D3D3D3',
  },

  top1: {
    flex: 1,
    flexDirection: 'row',
  },

  top2: {
    flex: 1,
    flexDirection:'row',
  },

  header1: {
    flex: 1,
  },

  header2: {
    flex: 1,
    alignItems: 'flex-end',
  },

  bottomContainer: {
    flex: 10,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },

  todayText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 5,
  },
  back: {
    color: 'black',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 5,
  },
  newExpense: {
    marginTop: 8,
    marginRight: 5,
  },

  today: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor : 'white',
  },

  category: {
    flex: 1,
    alignItems: 'center',    
  },

  calendar: {
    flex: 1,
    alignItems: 'center',    
  },

  expenseForToday: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },

  leftArrow: {
    flex: 1,
    marginTop: 10,
  },

  date: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },

  amount: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 40,
  },

  expenses: {
    flex: 5,
  },

  header3: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  button: {
    marginTop: 5,
    marginLeft: 130,
    marginRight: 130,    
  },


  row: {
    marginLeft: 10,
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    backgroundColor: 'white',
  },
  row2: {
    marginRight: 10,
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'right'
  },

  foodRow: {
    margin: 5,
    fontSize: 15,
    color: 'black',
  },

  categoryExpenses: {
    flex: 0,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  left: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  }

});

module.exports = styles;
