import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/home';
// import SettingsScreen from './settings';
import NotificationsScreen from '../screens/NotificationScreen/notification';
import MessagesScreen from '../screens/MessagesScreen/messages';
import EditProfile from '../screens/ProfileScreen/profile';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-community/async-storage';
// import Switching from './switching';
import MessageStack from '../screens/MessagesScreen/messages';

const Tab = createMaterialBottomTabNavigator();



export default function MainTabScreen() {
//   let navigation = useNavigation();
//   let auth = ''
//   AsyncStorage.getItem("access_token").then((value) => {
//     auth = value;
//     if (auth == null) {
//       navigation.replace('Auth');
//     }
//   })

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#24447C"
      barStyle={{ backgroundColor: '#44BCBC' }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={'#FCFCFC'} size={23} />
          ),
          title: 'Home',

        }}


      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={'#FCFCFC'} size={23} />
          ),
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <Icon name="comment" color={'#FCFCFC'} size={23} />
          ),
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={EditProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={'#FCFCFC'} size={23} />
          ),
          title: 'Home',
        }}
      />
    </Tab.Navigator>
  );
}

