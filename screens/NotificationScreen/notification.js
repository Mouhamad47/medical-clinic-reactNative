import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground,FlatList, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import React, { useState, createRef } from 'react';
import Header from '../../components/header';



export default function Notification(){
    // const [notifications, setNotifications] = useState('');
    const notifications =[
        {
            id : '1',
            body : 'Hey there, this is my test for a post my social app in React Native '
        },
        {
            id : '2',
            body : 'Hey there, this is my test for a post my social app in React Native '
        },
        {
            id : '3',
            body : 'Hey there, this is my test for a post my social app in React Native '
        },
        {
            id : '4',
            body : 'Hey there, this is my test for a post my social app in React Native '
        },
        {
            id : '5',
            body : 'Hey there, this is my test for a post my social app in React Native '
        },
       
    
    ]
    return(
        
        <ScrollView style={{backgroundColor:'white'}}>
            <Header />
            <View style={styles.title}>
                <Text style={styles.titleText}>Notifications</Text>
            </View>
            <ScrollView >
                <FlatList
                    style={styles.notificationList}
                    data={notifications}
                    keyExtractor={(item,index) => {
                        return index.toString();
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.notificationBox}>
                                <Image style={styles.icon}
                                source={require('../../pictures/avatar.svg')} />

                                <Text style={styles.description}>{item.body}</Text>
                            </View>
                        )
                }} />
        </ScrollView>
        </ScrollView>
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
        fontSize : 25,
        fontWeight: 600,
        color: '#24447C',
        letterSpacing: 1,
    },  
    notificationList:{
      marginTop:20,
      padding:10,
    },
    notificationBox: {
      padding:20,
      marginTop:5,
      marginBottom:5,
      backgroundColor: '#B4E4E4',
      flexDirection: 'row',
      borderRadius:10,
      opacity : 0.9,
      marginLeft:10,
      marginRight:10
    },
    icon:{
      width:45,
      height:45,
    },
    description:{
      fontSize:13,
      color: "#24447C",
      marginLeft:10,
      fontWeight : 600
    },
  });