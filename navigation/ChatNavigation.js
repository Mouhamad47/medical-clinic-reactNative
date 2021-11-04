
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import HomeScreen from '../screens/HomeScreen/home';
import ScheduleScreen from '../screens/ScheduleScreen/schedule';
import Messages from '../screens/MessagesScreen/messages';
import Chat from '../screens/ChatScreen/chat';






const Stack = createNativeStackNavigator();


export default function ChatNavigation(){
    return (
        <Stack.Navigator initialRouteName ="Messages">
            <Stack.Screen name = "Messages Screen" component = {Messages} options={{headerShown : false}} />
            <Stack.Screen name = "Chat Screen" component = {Chat} options={{headerShown : true,headerStyle:{backgroundColor:'#3BA5A5'},headerTintColor:'white'}} />
        </Stack.Navigator>
    );


    
}