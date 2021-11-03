import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, FlatList, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import React, { useState, createRef } from 'react';
import Header from '../../components/header';
import firebase from 'firebase/app';
import config from '../../firebase/firebaseconfig'
import { useEffect } from 'react';
import 'firebase/firestore'; 
import AsyncStorage from '@react-native-community/async-storage';


if (!firebase.apps.length) {
    firebase.initializeApp(config);
} 

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true,
    merge : true
});

export default function Notification() {
    const [notifications, setNotifications] = useState([]);
    // const [userId, setUserId] = useState();




    const getAllNotifications = () => {
        let listNotifications = [];
        AsyncStorage.getItem('user').then((value) => {
            db.collection('notifications').doc(`${value}`).collection(`${value}`).onSnapshot(snapchot => {
                snapchot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        // console.log(change.doc.data().idTo);
                        if (change.doc.data().idTo == 2) {
                            listNotifications.push(change.doc.data());
                        }
                    }
                })
                setNotifications(listNotifications);
            })
        });
       
            // db.collection('notifications').doc('2').collection('2').onSnapshot(snapchot => {
            //     snapchot.docChanges().forEach(change => {
            //         if (change.type === 'added') {
            //             // console.log(change.doc.data().idTo);
            //             if (change.doc.data().idTo == 2) {
            //                 listNotifications.push(change.doc.data());
            //             }
            //         }
            //     })
            //     setNotifications(listNotifications);
            // })
        
    }

    useEffect(() => {
        setTimeout(() => {
            getAllNotifications();
        }, 1500);
       
    }, [])





    return (

        <ScrollView style={{ backgroundColor: 'white' }}>
            <Header />
            <View style={styles.title}>
                <Text style={styles.titleText}>Notifications</Text>
            </View>
            <ScrollView >
                <FlatList
                    style={styles.notificationList}
                    data={notifications}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.notificationBox}>
                                <Image style={styles.icon}
                                    source={require('../../pictures/avatar.svg')} />

                                <Text style={styles.description}>{item.content}</Text>
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
    title: {
        padding: 10
    },
    titleText: {
        fontSize: 25,
        fontWeight: 700,
        color: '#24447C',
        letterSpacing: 1,
    },
    notificationList: {
        marginTop: 10,
        padding: 10,
    },
    notificationBox: {
        padding: 20,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#B4E4E4',
        flexDirection: 'row',
        borderRadius: 10,
        opacity: 0.9,
        marginLeft: 10,
        marginRight: 10
    },
    icon: {
        width: 45,
        height: 45,
    },
    description: {
        fontSize: 13,
        color: "#24447C",
        marginLeft: 10,
        fontWeight: 600
    },
});