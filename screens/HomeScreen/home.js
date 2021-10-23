import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, createRef } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Avatar, Card } from 'react-native-paper';
import EventCalendar from 'react-native-events-calendar';
import Header from '../../components/header';



const events = [
    { id: 1, start: '2021-10-16 01:00:00', end: '2021-10-16 01:30:00', title: 'Dr. Mariana Joseph', summary: '3421 Piedmont Rd NE, GA 3032' },
    { id: 2, start: '2021-10-16 02:00:00', end: '2021-10-16 02:30:00', title: 'Dr. Mariana Joseph', summary: '3421 Piedmont Rd NE, GA 3032' },
    { id: 3, start: '2021-10-16 03:00:00', end: '2021-10-16 03:30:00', title: 'Dr. Mariana Joseph', summary: '3421 Piedmont Rd NE, GA 3032' }
];
let { width } = Dimensions.get('window');
const vacation = { key: 1, color: 'red', selectedDotColor: 'blue' };
const massage = { key: 2, color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 3, color: 'green' };
const workout1 = { key: 4, color: 'red' };


export default function Home() {


    return (
        // <View style={{ flex: 1 }}>
        //     <EventCalendar
        //         key={events=>events.id.toString()}
        //         eventTapped={()=>{console.log("Hello")}}
        //         events={events}
        //         width={width}
        //         initDate={'2021-10-16'}
        //         start = {2}
        //         end = {24}
        //         size = {7}
        //         format24h={false}
        //         scrollToFirst ={false}


        //     />
        // </View>
        <ScrollView>
            <Header/>
            <CalendarList
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={2}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={1}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                onDayPress={(day) => { console.log('selected day', day.dateString) }}
                hideExtraDays={false}
                // markedDates={{
                //     // '2021-10-17': {textColor: 'green'},
                //     '2021-10-17': {startingDay: true, color: 'green'},
                //     '2021-10-18': {selected: true, startingDay: true, color: 'green', textColor: 'gray'},
                //     '2021-10-20': {disabled: false, endingDay: true, color: 'green', endingDay: true}
                // }}
                markedDates={{
                    '2021-10-17': { dots: [vacation, massage, workout,workout1] },
                    // '2021-10-18': {dots: [massage, workout], disabled: true}
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