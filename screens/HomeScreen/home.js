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
const vacation = {  color: 'red' };
const massage = { color: '#24447C'};
const workout = {  color: 'green' };
const workout1 = {  color: 'red' };



export default function Home({navigation}) {
    const [dots,setDots]=useState({});
    const massage = { color: '#24447C'};


    const getConsDots = async () =>{
        api.getUserDots().then((response)=>{
            let json_data = Object.assign({},response.data);
            // data = JSON.parse(response.data);
            setDots(json_data);
             console.log(json_data);
         })
     }
    // const getAllMessages = async()=>{
    //     api.getMessages().then((response)=>{
    //         console.log(response);
    //     })
    // } 
    //  useEffect(() => {
    //     getAllMessages();
    // }, [])
  

    return (
       
        <ScrollView>
            <Header/>
            <CalendarList
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={0}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={1}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                onDayPress={(day) => {
                    console.log('selected day', day.dateString) ;
                    navigation.navigate('Schedule', {dateDay:day.dateString});
                   }}
                hideExtraDays={false}
               
                // markedDates={
                //     {
                //         '2021-10-17':
                //         { dots:
                //             [massage]
                //         }
                //     }
                //     }
                markedDates={dots}
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