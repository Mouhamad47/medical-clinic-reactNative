import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import React, { useState, createRef } from 'react';



export default function Profile(){
    return(
        <View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Profile</Text>
            </View>
            <View style={styles.profileView}>
                <Image style={{width: 50, height: 50}} source={require('../../pictures/avatar.svg')} />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    // container:{
    //   backgroundColor:'#FBE8DA'
    // },
    title : {
        padding : 10
    },  
    titleText :{
        fontSize : 20,
        fontWeight: 600,
        color: '#24447C'
    }, 
    profileView :{
        marginTop:10,
        height:500,
        backgroundColor:'#9CDCDC',
        borderTopRightRadius:35,
        borderTopLeftRadius:35
    }
});