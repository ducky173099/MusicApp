import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{height:50, backgroundColor:'pink'}}>
           <Text>day la header</Text>
      </View>
    );
  }
}

