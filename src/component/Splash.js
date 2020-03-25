import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Hand from '../media/icon/hand.png';


export default class Splash extends Component {

    render() {
    
        return (
            <View style={styles.container}>
                <View/>
                <View style={styles.wrapper}>
                    <Text style={styles.txtStart}>Start Here</Text>
                    <Image source={Hand} style={styles.icHand}/>
                </View>
                <View style={styles.bgTextBot}>
                    <Text style={styles.txtBot}>Powered by vnShine</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',

    },
    wrapper:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    txtStart:{
        fontSize: 25,
        fontWeight:'700',
        color:'#1a1b1d'

    },
    icHand:{
        width: 30,
        height: 30,
        marginLeft: 13,
    },
    bgTextBot:{
        alignItems:'center',
        justifyContent:'center',
        paddingBottom: 5,

    },
    txtBot:{
        fontSize:15,
    }


})
