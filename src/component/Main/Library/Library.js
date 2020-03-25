import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Library extends Component {
  render() {
    return (
      <View style={{backgroundColor:'yellow', flex:1, alignItems:'center'}}>
          <Text>Library COmponent</Text>
      </View>
    );
  }
}
