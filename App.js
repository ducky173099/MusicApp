
import React, { Component } from 'react';
import {View, Text} from 'react-native';

import MyApp from './src/component/MyApp';
import Splash from './src/component/Splash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }


  render() {
    if (this.state.isLoading) {
      return <Splash />;
    }
  
    return (
      <MyApp/>
    );
  }
}
