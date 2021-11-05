import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import React, { useState, createRef, useEffect } from 'react';
import Header from '../../components/header';
import api from '../../server/api';
import ChatNavigation from '../../navigation/ChatNavigation';
import firebase from 'firebase/app';
import config from '../../firebase/firebaseconfig';
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


export default function Messages({ navigation }) {

    const [messages, setMessages] = useState([]);
    const [lastmessage,setLastMessage] = useState([]);

    const getListOfUser = async (id) => {
        api.selectAllUsersExceptOne(id).then((response) => {
            setMessages(response.data);
            console.log(response);
        })
    }

    useEffect(() => {
        AsyncStorage.getItem('user').then((value)=>{
            getListOfUser(value);
        })
       
        // const unsubscribe = db.collection('messages').doc()

    }, [])

    return (
        <View style={{ backgroundColor: 'white' }}>
            <Header />
            <View style={styles.title}>
                <Text style={styles.titleText}>Chats({messages.length})</Text>
            </View>
            <View>
                <View style={styles.container}>
                    {/* <View style={styles.numberOfChatView} >
                        <Text style={styles.numberOfChat}>2 Chats</Text>
                    </View> */}
                    <ScrollView >
                        <FlatList
                            style={{ height: 480, marginTop: 10 }}
                            data={messages}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => (

                                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat Screen', { id: item.id, first_name: item.first_name, last_name: item.last_name })} >
                                    <View style={styles.userinfo}>
                                        <View style={styles.userimagewrapper}>
                                            <Image source={require('../../pictures/avatar.svg')} style={styles.userimage} />
                                        </View>
                                        <View style={styles.textsection}>
                                            <View style={styles.userinfotext}>
                                                <Text style={styles.username}> {item.first_name} {item.last_name} </Text>
                                                <Text style={styles.posttime}>4:00 PM</Text>
                                            </View>
                                            <Text style={styles.messagetext}>lorem lorem lorem lorem lorem</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )} />
                    </ScrollView >
                </View>
            </View>
        </View>
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
    container: { //view
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#B4E4E4',
        borderTopLeftRadius: 50

    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: { // touchable opacity

        width: '100%',
        marginLeft: 10

    },
    userinfo: { //view
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor : "red",


    },
    userimagewrapper: { //view
        paddingTop: 27,
        paddingBottom: 15,
        flex: 0.5
    },
    userimage: { //img
        width: 40,
        height: 40,
        borderRadius: 25
    },
    textsection: { //view
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#24447C',
        flex: 4.5
    },
    userinfotext: { //view
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    username: { //text
        fontSize: 14,
        fontWeight: 'bold',

    },
    posttime: { //text
        fontSize: 12,
        color: '#666',

    },
    messagetext: {
        fontSize: 14,
        color: '#333333',
        marginLeft: 4,
        marginTop: 4,
    },
    numberOfChatView: {
        marginTop: 20,
        marginLeft: -265,

    },
    numberOfChat: {
        fontWeight: '700',
        color: '#24447C',
        letterSpacing: 1,
    }
});