import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/home';
// import SettingsScreen from './settings';
import NotificationsScreen from '../screens/NotificationScreen/notification';
import MessagesScreen from '../screens/MessagesScreen/messages';
import EditProfile from '../screens/ProfileScreen/profile';
import React, { useEffect, useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-community/async-storage';
// import Switching from './switching';
import MessageStack from '../screens/MessagesScreen/messages';
import SwitchStack from './SwitchStack';
import AsyncStorage from '@react-native-community/async-storage';
import NurseHomeScreen from '../screens/NurseHomeScreen/nursehome'

const Tab = createMaterialBottomTabNavigator();


export default function MainTabScreen() {
  let navigation = useNavigation();
  const [auth, setAuth] = useState('');
  const [role, setRole] = useState(true);



  const checkNavigation = () => {
    AsyncStorage.getItem("access_token").then((value) => {
      setAuth(value);
      if (auth == null) {
        navigation.replace('Auth');
      }
    })
  }
  const getUserRole = () => {
    AsyncStorage.getItem("role").then((value) => {
      if (value == 2) {
        setRole(true)
      }
      else {
        setRole(false);
      }
    })
  }

  useEffect(() => {
    checkNavigation();
    // getUserRole();

  }, [role]);

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor="#3BA5A5"
      inactiveColor='#B4E4E4'

      barStyle={{ backgroundColor: 'white' }}
    >
      {role
        ? <Tab.Screen
          name="HomeTab"
          component={SwitchStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (

              <Icon name="home" color={color} size={25} />
            ),
            title: 'Home',

          }}


        />
        : <Tab.Screen
          name="NurseHomeTab"
          component={NurseHomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (

              <Icon name="home" color={color} size={25} />
            ),
            title: 'NurseHome',

          }}


        />
      }
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={25} />
          ),
          title: 'Notifications',
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <Icon name="comment" color={color} size={25} />
          ),
          title: 'Messages',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={EditProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={25} />
          ),
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

