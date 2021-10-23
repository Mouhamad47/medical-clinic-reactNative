import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, createRef } from 'react';
import Header from '../../components/header';



export default function Profile() {
    return (
        <View style={{ backgroundColor: 'white' }}>
             <Header/>
            <View style={styles.title}>
                <Text style={styles.titleText}>Profile</Text>
            </View>
            <View style={styles.profileView}>
                <View style={styles.imageView}>
                    <Image style={{ width: 100, height: 100 }} source={require('../../pictures/avatar.svg')} />
                    <Text style={styles.userName}>John Doe</Text>
                    <Text style={styles.greeting}> Greeting message depends on time </Text>
                </View>
                <View>
                    <TouchableOpacity>
                    <View style = {styles.menuItem}>
                        <Icon name = 'sign-out' color = "#24447C" size={25} />
                        <Text style={styles.menuItemText}>Logout</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>

    );
}

const styles = StyleSheet.create({
    // container:{
    //   backgroundColor:'#FBE8DA'
    // },
    title: {
        padding: 10
    },
    titleText: {
        fontSize: 25,
        fontWeight: 600,
        color: '#24447C',
        letterSpacing: 1,
    },
    profileView: {
        marginTop: 30,
        height: 500,
        backgroundColor: '#B4E4E4',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,

    },
    imageView :{
        alignItems : 'center',
        marginTop : -50
    },
    userName : {
        fontSize : 23,
        lineHeight : 35,
        fontWeight : '500',
        letterSpacing : 1
    },
    greeting : {
        lineHeight: 74,
        letterSpacing: 2
    },
    menuItem : {
        flexDirection : 'row',
        paddingVertical : 15,
        paddingHorizontal : 30,
        marginTop: 200
    },
    menuItemText : {
        color : '#24447C',
        marginLeft : 20,
        fontWeight : '600',
        fontSize : 16,
        lineHeight : 26
    }
});