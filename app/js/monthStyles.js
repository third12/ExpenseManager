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
  
  leftArrow: {
    flex: 1,
    marginTop: 10,
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
    flex: 12,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },

  monthText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 5,
  },
  
  expenseForMonth: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
    backgroundColor: '#D3D3D3',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor : 'black',
  },

  leftcolumn: {
    flex:1,
    color: 'black',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
  },

  rightcolumn: {
    flex:1,
    color: 'black',
    textAlign: 'right',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
  },

  monthExpenses: {
    flex: 0,
    flexDirection: 'row',
  },

});

module.exports = styles;
