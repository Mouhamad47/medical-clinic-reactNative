import React, { useState, createRef, useLayoutEffect } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, View, ScrollView, ImageBackground, FlatList, Dimensions, Image, Item, TextInput, Button, Pressable, SafeAreaView, KeyboardAvoidingView, Platform, Touchable, TouchableOpacity, TouchableWithoutFeedbackBase, TouchableNativeFeedbackBase, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-paper';
import moment from 'moment';
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
    const { first_name } = route.params;
    const { last_name } = route.params;

    // useEffect(() => {

    //     arraySorting(messages);

    //   }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Mouhamad Assaad",
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            // headerTitle: () => {
            //     <View style={{ flexDirection: 'row', backgroundColor: 'red', padding: 100 }}>
            //         {/* <Image style={{flex:2}} source={require('../../pictures/avatar.svg')}/> */}
            //         <Text style={{ flex: 1 }}>{first_name} {last_name}</Text>
            //     </View>
            // },

            // headerCenter: () => (
            //     <Button
            //         onPress={() => alert('This is a button!')}
            //         title="Info"
            //         color="#fff"
            //     />
            // ),

        })
    }, [navigation])

    const sendMessage = () => {
        AsyncStorage.getItem('user').then((value) => {
            let timestamp = Date.now();
            let groupChatId = `${route.params.id}-${value}`;
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
            let groupChatId = `${route.params.id}-${value}`;
            const unsubscribe = db.collection('messages')
                .doc(groupChatId)
                .collection(groupChatId)
                .orderBy("timestamp", "asc")
                .onSnapshot((snapchot) => setMessages(
                    snapchot.docs.sort((a, b) => {
                        return a.timestamp - b.timestamp
                    })
                        .map(doc => ({
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
               
                <>
                    <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
                        {messages.map(({ id, data }) => (
                            data.idTo == route.params.id ? (
                                <View key={id} style={styles.reciever}>
                                    <Text style={styles.senderText}>{data.content}</Text>
                                    <Text style={[styles.momentmsg,{color:'white'}]}>{ moment(data.timestamp).format('LT') }</Text>
                                </View>
                            ) : (
                                <View key={id} style={styles.sender}>
                                    <Text style={styles.recieverText}>{data.content}</Text>
                                    <Text style={styles.momentmsg}>{ moment(data.timestamp).format('LT') }</Text>
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
        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 5,
        marginRight: 15,
        marginBottom: 20,
        maxWidth: '80%',
        position: 'relative'
    },
    sender: {
        padding: 15,
        backgroundColor: "#ECECEC",
        alignSelf: 'flex-start',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 15,
        margin: 8,
        maxWidth: '80%',
        position: 'relative'
    },
    recieverText: {
        color: 'black',
        fontWeight: 500,
        
    },
    senderText: {
        color: 'white',
        fontWeight: 500,
        
    },
    momentmsg :{
        fontSize:12
    }



});