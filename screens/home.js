import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, createRef } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Avatar, Card } from 'react-native-paper';
import EventCalendar from 'react-native-events-calendar';



const events = [
    { start: '2021-10-15 00:30:00', end: '2021-10-15 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-15 01:30:00', end: '2021-10-15 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-15 04:10:00', end: '2021-10-15 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-15 01:05:00', end: '2021-10-15 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-15 14:30:00', end: '2021-10-15 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-15 01:20:00', end: '2021-10-15 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-15 04:10:00', end: '2021-10-15 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-15 00:45:00', end: '2021-10-15 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-15 10:30:00', end: '2021-10-15 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-16 01:30:00', end: '2021-10-16 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-16 03:10:00', end: '2021-10-16 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2021-10-16 00:10:00', end: '2021-10-16 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
];
let { width } = Dimensions.get('window');


export default function Home() {


    return (
        <View style={{ flex: 1 }}>
            <EventCalendar
                // eventTapped={this._eventTapped.bind(this)}
                events={events}
                width={width}
                initDate={'2021-10-17'}
                start = {12}
                end = {24}
                size = {7}
                format24h={false}
                scrollToFirst ={false}
            />
        </View>
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