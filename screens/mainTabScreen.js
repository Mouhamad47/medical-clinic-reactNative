import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
// import SettingsScreen from './settings';
import NotificationsScreen from './notification';
import MessagesScreen from './messages';
import EditProfile from './profile';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-community/async-storage';
// import Switching from './switching';
import MessageStack from './messages';

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
            <Icon name="home" color={'#294E8E'} size={23} />
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
            <Icon name="bell" color={'#294E8E'} size={23} />
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
            <Icon name="comment" color={'#294E8E'} size={23} />
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
            <Icon name="user" color={'#294E8E'} size={23} />
          ),
          title: 'Home',
        }}
      />
    </Tab.Navigator>
  );
}

