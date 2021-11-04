import React, { useState, createRef, useLayoutEffect } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, View, ScrollView, ImageBackground, FlatList, Dimensions, Image, Item, TextInput, Button, Pressable, SafeAreaView, KeyboardAvoidingView, Platform, Touchable, TouchableOpacity, TouchableWithoutFeedbackBase, TouchableNativeFeedbackBase, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-swipe-gestures'
import firebase from 'firebase/app';
import config from '../../firebase/firebaseconfig';
import 'firebase/firestore';



if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true,
    merge: true
});




export default function Chat({ navigation, route }) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerTitleAlign: "left",
            headerBackTitleVisible: false,
            // headerTitle : () =>{
            //     <View style ={{flexDirection:'row',alignItems:'center'}}>
            //         {/* <Image style={{flex:2}} source={require('../../pictures/avatar.svg')}/> */}
            //         <Text>{route.params.first_name} {route.params.last_name}</Text>
            //     </View>
            // },

            headerCenter: () => (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#fff"
                />
            ),

        })
    }, [navigation])

    const sendMessage = () => {
        AsyncStorage.getItem('user').then((value) => {
            let timestamp = Date.now();
            let groupChatId = `${value}-${route.params.id}`;
            const itemMessage = {
                content: input,
                idFrom: +value,
                idTo: route.params.id,
                timestamp: timestamp
            }
            db.collection('messages').doc(groupChatId).collection(groupChatId).add(itemMessage);
            setInput("");
        })
    }

    useLayoutEffect(() => {
        AsyncStorage.getItem('user').then((value) => {
            let groupChatId = `${value}-${route.params.id}`;
            const unsubscribe = db.collection('messages')
                .doc(groupChatId)
                .collection(groupChatId)
                .orderBy("timestamp", "desc")
                .onSnapshot((snapchot) => setMessages(
                    snapchot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                ))
            return unsubscribe;
        })

    }, [route])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}>
                {/* <TouchableNativeFeedbackBase onPress ={Keyboard.dismiss}> */}
                <>
                    <ScrollView contentContainerStyle={{paddingTop:15}}>
                        {messages.map(({ id, data }) => (
                            data.idFrom != route.params.id ? (
                                <View key={id} style={styles.reciever}>
                                    <Text style={styles.senderText}>{data.content}</Text>
                                </View>
                            ) : (
                                <View  key={id} style={styles.sender}>
                                    <Text style={styles.recieverText}>{data.content}</Text>
                                </View>
                            )
                        ))}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput value={input} onChangeText={text => { setInput(text) }} style={styles.textInput} placeholder="Enter a message" />
                        <TouchableOpacity onPress={sendMessage} activeOpacity={0.5} >
                            <Icon name="paper-plane" size={24} color="#3BA5A5" />
                        </TouchableOpacity>
                    </View>
                </>
                {/* </TouchableNativeFeedbackBase> */}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        borderColor: 'transparent',
        backgroundColor: '#ECECEC',
        borderWidth: 1,
        padding: 10,
        color: 'grey',
        borderRadius: 30
    },
    reciever: {
        padding: 15,
        backgroundColor: "#3BA5A5",
        alignSelf: 'flex-end',
        borderTopLeftRadius:5,
        borderTopRightRadius:0,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:5,
        marginRight: 15,
        marginBottom: 20,
        maxWidth: '80%',
        position: 'relative'
    },
    sender: {
        padding: 15,
        backgroundColor: "#ECECEC",
        alignSelf: 'flex-start',
        borderTopLeftRadius:0,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:15,
        margin: 15,
        maxWidth: '80%',
        position: 'relative'
    },  
    recieverText : {
        color : 'black',
        fontWeight :500,
        // marginLeft : 10,
        // marginBottom : 15
    },
    senderText :{
        color : 'white',
        fontWeight :500,
        // marginLeft : 10,
        // marginBottom : 15
    }



});