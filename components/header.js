import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, createRef } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Avatar, Card } from 'react-native-paper';
import EventCalendar from 'react-native-events-calendar';



export default function Header(){
    return(
        <View>
            <View style={styles.imageView} >
                <Image style={{width:150,height:62}} source={require('../pictures/logo1.png')} />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container :{
        
    },
    imageView :{
        height :63,
        backgroundColor :'#3BA5A5'
    }


});