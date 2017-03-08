'use strict'

import {
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  
  child1: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  child2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  list: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  left: {
    fontSize: 24,
  },

  right: {
    fontSize: 24,
    textAlign: 'center',
  },

  textstyle1: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24
  },

  child5: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 24
	}

});

module.exports = styles;
