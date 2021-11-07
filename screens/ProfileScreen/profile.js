import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, createRef } from 'react';
import Header from '../../components/header';
import api from '../../server/api';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';



export default function Profile({ navigation }) {
    const [userData, setUserData] = useState(null);
    const [greeting, setGreeting] = useState('');

    const getUserProfile = async () => {
        api.getUserInfo().then((response) => {
            setUserData(response.data[0]);
            // console.log(response.data[0].major.name);
        })
    }
    const greetingMessage = () => {
        let d = new Date();
        let t = d.getHours();
        if (t < 12) {
            setGreeting("Good Morning");
        }
        else if (t < 18) {
            setGreeting("Good Afternoon");
        }
        else {
            setGreeting("Good Evening");
        }
    }
    const handleLogout = () => {
        api.logout().then((response) => { console.log('logout') })
        AsyncStorage.clear();
        navigation.replace('Auth');
    }




    useEffect(() => {
        getUserProfile();
        greetingMessage();
        console.log(userData);
    }, [])

    return (
        <View style={{ backgroundColor: 'white' }}>
            <Header />
            <View style={styles.title}>
                <Text style={styles.titleText}>Profile</Text>
            </View>
            {userData &&
            <View style={styles.profileView}>
                
                <View style={styles.imageView}>
                    
                    <Image style={{ width: 100, height: 100 }} source={require('../../pictures/avatar.svg')} />
                    <Text style={styles.userName}>{userData['first_name']} {userData['last_name']}</Text>
                    <Text style={styles.greeting}> {greeting} </Text>
                </View>
                <View style={styles.info}>
                    <View style={styles.majorsection}>
                        <Icon  name="user-md" color="#3BA5A5" size={25} />
                        
                            <Text style={styles.majorText}> Major: {userData.major.name}</Text>
                        
                        
                    </View>
                    <View style={[styles.majorsection,{marginTop:25}]}>
                        <Icon  name="stethoscope" color="#3BA5A5" size={25} />
                        <Text style={styles.majorText}> Consultations:</Text>
                    </View>

                </View>
                <View>
                    <TouchableOpacity onPress={handleLogout}>
                        <View style={styles.menuItem}>
                            <Icon name='sign-out' color="#ef3737" size={25} />
                            <Text style={styles.menuItemText}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        }
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
    profileView: {
        marginTop: 30,
        height: 500,
        backgroundColor: '#B4E4E4',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,

    },
    imageView: {
        alignItems: 'center',
        marginTop: -50
    },
    userName: {
        fontSize: 23,
        lineHeight: 35,
        fontWeight: '500',
        letterSpacing: 1
    },
    greeting: {
        lineHeight: 74,
        letterSpacing: 2
    },
    info: {
        flexDirection: 'column',
        marginLeft: 45,
        
    },
    majorsection :{
        flex : 1,
        flexDirection : 'row'
        
    },
    majorText :{
        color : '#24447C',
        fontSize : 18,
        fontWeight : '600'
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 120,
        marginLeft : 15
    },
    menuItemText: {
        color: '#ef3737',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    }
});