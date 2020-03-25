import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Explore from './Explore/Explore';
import Trending from './Trending/Trending';
import Search from './Search/Search';
import Library from './Library/Library';
import Settings from './Settings/Settings';


import tabbar_explore from '../../media/icon/tabbar_explore.png';
import tabbar_trending from '../../media/icon/tabbar_trending.png';
import tabbar_search from '../../media/icon/tabbar_search.png';
import tabbar_library from '../../media/icon/tabbar_library.png';
import tabbar_settings from '../../media/icon/tabbar_settings.png';

const Tab = createBottomTabNavigator();


export default class Shop extends Component {
   
  
    
    render() {

        return (
            <View style={{flex:1}}>
                <Tab.Navigator 
                    initialRouteName="Explore"
                    tabBarOptions={{activeTintColor: '#FF2D55',}}>
                    <Tab.Screen name="Explore" component={Explore}
                        options={{
                        tabBarLabel: 'Explore',
                        selectedTitleStyle:{color:'#FF2D55'},
                        tabBarIcon: ({ focused, color, size }) => (
                            focused ? <Image source={tabbar_explore}
                            style={[{ tintColor: '#FF2D55'}]}
                            />
                            : <Image source={tabbar_explore}
                                style={[{ tintColor: '#080808', opacity: 0.5 }]}
                            />
                        ),
                        }}
                    />
                    <Tab.Screen name="Trending" component={Trending} 
                        options={{
                        tabBarLabel: 'Trending',
                        tabBarIcon: ({ focused, color, size }) => (
                            focused ? <Image source={tabbar_trending}
                            style={[{ tintColor: '#FF2D55' }]}
                            ></Image>
                            : <Image source={tabbar_trending}
                                style={[{ tintColor: '#080808', opacity: 0.5 }]}
                            ></Image>
                        ),
                        }}
                    />
                    <Tab.Screen name="Search" component={Search} 
                        options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ focused, color, size }) => (
                            focused ? <Image source={tabbar_search}
                            style={[{ tintColor: '#FF2D55' }]}
                            />
                            : <Image source={tabbar_search}
                                style={[{ tintColor: '#080808', opacity: 0.5 }]}
                            />
                        ),
                        }}
                    />
                    <Tab.Screen name="Library" component={Library} 
                        options={{
                        tabBarLabel: 'Library',
                        tabBarIcon: ({ focused, color, size }) => (
                            focused ? <Image source={tabbar_library}
                            style={[{ tintColor: '#FF2D55'}]}
                            />
                            : <Image source={tabbar_library}
                                style={[{ tintColor: '#080808',opacity: 0.5 }]}
                            />
                        ),
                        }}
                    />
                    <Tab.Screen name="Settings" component={Settings} 
                        options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ focused, color, size }) => (
                            focused ? <Image source={tabbar_settings}
                            style={[{ tintColor: '#FF2D55'}]}
                            />
                            : <Image source={tabbar_settings}
                                style={[{ tintColor: '#080808', opacity: 0.5 }]}
                            />
                        ),
                        }}
                    />
                
                </Tab.Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width: 22,
        height: 22,
        
    },
    badgeCount:{
        flex:1,
        width:16,
        height:16,
        position:'absolute', 
        backgroundColor:'red', 
        left:17, 
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    countProduct:{
        color:'#fff',
        fontSize:9,
    }
})