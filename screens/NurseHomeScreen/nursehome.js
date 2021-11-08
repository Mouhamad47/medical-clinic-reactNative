import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, createRef } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Avatar, Card } from 'react-native-paper';
import EventCalendar from 'react-native-events-calendar';
import Header from '../../components/header';
import api from '../../server/api';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';




let { width } = Dimensions.get('window');
const vacation = { key: 1, color: 'red', selectedDotColor: 'blue' };
const massage = { key: 2, color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 3, color: 'green' };
const workout1 = { key: 4, color: 'red' };


export default function Home({navigation}) {
  
    return (
       
        <ScrollView>
            <Header/>
            <CalendarList
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={5}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={5}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                onDayPress={(day) => {
                    console.log('selected day', day.dateString) ;
                   
                   }}
                hideExtraDays={false}
                markedDates={{
                    '2021-11-17': { dots: [vacation, massage, workout,workout1] },
                    
                }}
                markingType={'multi-dot'}


            />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});