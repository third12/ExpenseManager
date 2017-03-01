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
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  
  child1: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  child2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },

  
  child5: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24
	}

});

module.exports = styles;
