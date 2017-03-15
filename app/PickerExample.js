import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';

class PickerExample extends React.Component {
  state = {
    selected1: 'key1',
    selected2: 'key1',
    selected3: 'key1',
    color: 'red',
    mode: Picker.MODE_DIALOG,
  };

  render() {
    return (
    	<View>
<Picker
  selectedValue={this.state.language}
  onValueChange={(lang) => this.setState({language: lang})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>

          <Picker
            style={styles.picker}
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this, 'selected1')}>
            <Picker.Item label="hello" value="key0" />
            <Picker.Item label="world" value="key1" />
          </Picker>

          </View>
    );
  }
  changeMode = () => {
    const newMode = this.state.mode === Picker.MODE_DIALOG
        ? Picker.MODE_DROPDOWN
        : Picker.MODE_DIALOG;
    this.setState({mode: newMode});
  };

  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };
}

var styles = StyleSheet.create({
  picker: {
    width: 100,
  },
});


module.exports = PickerExample;
