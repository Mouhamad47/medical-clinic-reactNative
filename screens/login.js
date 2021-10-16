import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import React, { useState, createRef } from 'react';


export default function Login() {
    return (


        <ImageBackground source={require('../pictures/loginback.png')} style={styles.img}>
            <View style={styles.logindiv}>
               
            </View>
            <View style={styles.logodiv}>
                    <Image source={require('../pictures/logo1.png')} style={styles.logo}></Image>
                    <Text style={styles.logotext}>Medical Clinic</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}><Icon name="user" style={{fontSize:16}} /> Email Address</Text>
                    <TextInput style={styles.inputs} placeholder=' Enter your email address' keyboardType='email-address' />
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}><Icon name="lock" style={{fontSize:16}} /> Password</Text>
                    <TextInput style={styles.inputs} placeholder=' Enter your password' keyboardType='email-address' />
                </View>
                <View style={styles.buttonView}>

                    <Pressable style={styles.button}>
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
        marginTop : -505,
    },
    logo: {
        width: 120,
        height: 120,
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
        paddingLeft : 5,
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
        color: '#24447C',
    },
});