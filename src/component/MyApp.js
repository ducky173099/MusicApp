// import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './Main/Main';


const Stack = createStackNavigator();

export default class MyApp extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode='none' initialRouteName="MAIN">
                    <Stack.Screen name="MAIN" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>

            /* <View>
                <Text>kyyyyyyyyyyy</Text>
            </View> */
        );
    }
}
