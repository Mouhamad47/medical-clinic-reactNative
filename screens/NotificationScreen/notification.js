import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, FlatList, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import React, { useState, createRef, useLayoutEffect } from 'react';
import Header from '../../components/header';
import moment from 'moment';
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
    merge: true
});

export default function Notification({ route }) {
    const [notifications, setNotifications] = useState([]);
    


    useLayoutEffect(() => {
        AsyncStorage.getItem('user').then((value) => {
            const unsubscribe = db.collection('notifications')
                .doc(`${value}`)
                .collection(`${value}`)
                .orderBy("timestamp", "desc")
                .onSnapshot((snapchot) => setNotifications(
                    snapchot.docs
                        .map(doc => ({
                            id: doc.id,
                            data: doc.data()
                        }))

                ))
            return unsubscribe;
            
        })
        
    }, [])

    

    useEffect(() => {
      

    }, [])





    return (

        <ScrollView style={{ backgroundColor: 'white' }}>
            <Header />
            <View style={styles.title}>
                <Text style={styles.titleText}>Notifications({notifications.length})</Text>
            </View>
            <ScrollView  >
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

                                <Text style={styles.description}>{item.data.content} ({moment(item.data.timestamp).format('lll')}) </Text>
                            </View>
                        )
                    }} />
            </ScrollView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    
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