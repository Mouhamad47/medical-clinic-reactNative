import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import React, { useState, createRef } from 'react';
import api from '../../server/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector } from 'react-redux';


export default function Login({ navigation }) {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errortext, setErrortext] = useState('');
    const handleLogin = () => {
        setErrortext('');
        if ((!userEmail) || (!userPassword)) {
            setErrortext('Both email and password are required');
            return;
        }
        let dataToSend = { email: userEmail, password: userPassword };
        api.login(dataToSend, { headers: { 'Accept': "application/json", 'content-type': "application/json" } })
            .then(response => {
                // If server response message same as Data Matched
                if (response.status === 200) {
                    AsyncStorage.setItem('access_token', response.data.access_token);
                    navigation.replace('MainTabScreen');
                }
                else {
                    setErrortext('Please check your email id or password');
                }
                console.log(response.data.access_token);
            })
            .catch((error) => {
                setErrortext('Please check your email or password');
                console.error(error);
            });
    };
    return (


        <ImageBackground source={require('../../pictures/loginback.png')} style={styles.img}>
            <View style={styles.logindiv}>

            </View>
            <View style={styles.logodiv}>
                <Image source={require('../../pictures/lognative.png')} style={styles.logo}></Image>
                {/* <Text style={styles.logotext}>Medical Clinic</Text> */}
            </View>
            <View style={styles.form}>
                <Text style={styles.label}><Icon name="user" style={{ fontSize: 16 }} /> Email Address</Text>
                <TextInput style={styles.inputs} placeholder=' Enter your email address' keyboardType='email-address'
                    onChangeText={(UserEmail) => { setUserEmail(UserEmail); setErrortext('') }} />
            </View>
            <View style={styles.form}>
                <Text style={styles.label}><Icon name="lock" style={{ fontSize: 16 }} /> Password</Text>
                <TextInput style={styles.inputs} placeholder=' Enter your password' keyboardType='email-address'
                    onChangeText={(UserPassword) => { setUserPassword(UserPassword); setErrortext('') }} />
            </View>

            <View style={styles.buttonView}>
                {errortext != '' ? (
                    <Text style={styles.errorTextStyle}>
                        {errortext}
                    </Text>
                ) : null}
                <Pressable style={styles.button} onPress={handleLogin} >
                    <Text style={styles.btntext}>Login</Text>
                </Pressable>


            </View>

        </ImageBackground>


    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: null,
        width: null,
        justifyContent: 'center',
        textAlign: 'center'

    },
    img: {
        height: Dimensions.get('window').height,
        overflow: 'hidden',
        marginTop: 0,
        zIndex: 2
    },
    logindiv: {
        marginTop: 90,
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        height: 500,
        opacity: 0.85
    },
    logodiv: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -505,
    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 15
    },
    logocontainer: {
        alignItems: 'center',
        zIndex: 2,
        opacity: 1

    },
    logotext: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    form: {
        marginTop: 17
    },
    label: {
        color: '#3BA5A5',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 40,
    },
    inputs: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        border: " 2px solid #3BA5A5",
        marginLeft: 30,
        marginRight: 30
    },
    buttonView: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 122,
        borderRadius: 50,
        elevation: 4,
        backgroundColor: '#3BA5A5',
        marginTop: 15
    },
    btntext: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        opacity: 1
    },
});