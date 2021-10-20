import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView,FlatList,TouchableOpacity, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable } from 'react-native';
import React, { useState, createRef } from 'react';


const MessagesJson =[
    {
        id : '1',
        userName : 'Nabih Tannous',
        userImg : require('../../pictures/avatar.svg'),
        messageTime : '4 mins ago',
        messageText : 'Hey there, this is my test for a post my social app in React Native '
    },
    {
        id : '2',
        userName : 'Nabiha family',
        userImg : require('../../pictures/avatar.svg'),
        messageTime : '4 mins ago',
        messageText : 'Hey there, this is my test for a post my social app in React Native '
    },
   

]
export default function Messages(){
    return(
        <View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Chats</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        style ={{height: 480}} 
                        data ={MessagesJson}    
                        keyExtractor={item=>item.id}
                        renderItem ={({item})=>(
                            <TouchableOpacity style={styles.card} >
                                <View style={styles.userinfo}>
                                    <View style={styles.userimagewrapper}>
                                        <Image source={item.userImg} style={styles.userimage} />
                                    </View>
                                    <View style ={styles.textsection}>
                                        <View style={styles.userinfotext}>
                                            <Text style={styles.username}> {item.userName} </Text>
                                            <Text style ={styles.posttime}>{item.messageTime}</Text>
                                        </View>
                                    <Text style={styles.messageText}>{item.messageText}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )} />
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
   
    title : {
        padding : 10
    },  
    titleText :{
        fontSize : 20,
        fontWeight: 600,
        color: '#24447C'
    }, 
    container: { //view
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        height : '100%',
        backgroundColor : '#9CDCDC',
        borderTopLeftRadius : 50
        
    },
    container2 :{
        flex : 1,
        alignItems :'center',
        justifyContent : 'center'
    },
    card: { // touchable opacity

        width: '100%',
        marginLeft : 10

    },
    userinfo :{ //view
        flexDirection : 'row',
        justifyContent : 'space-between',
        // backgroundColor : "red",
       

    },
    userimagewrapper : { //view
        paddingTop : 15,
        paddingBottom : 15
    },
    userimage :{ //img
        width : 40,
        height : 40,
        borderRadius : 25
    },
    textsection :{ //view
        flexDirection : 'column',
        justifyContent : 'center',
        padding : 15,
        paddingLeft : 0,
        marginLeft : 10,
        width : 300,
        borderBottomWidth : 1 ,
        borderBottomColor : '#24447C'
    },
    userinfotext : { //view
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 5
    },
    username : { //text
        fontSize : 14,
        fontWeight : 'bold',

    },
    posttime : { //text
        fontSize : 12,
        color : '#666',

    },
    messagetext : {
        fontSize : 14,
        color : '#333333'
    }
});