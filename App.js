import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/LoginScreen/login';
import MainTabScreen from './navigation/mainTabScreen';
import ScheduleScreen from './screens/ScheduleScreen/schedule';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:'#44BCBC'},headerTintColor:'#24447C'}}  >
        {/* <Stack.Screen name = "Login" component ={Login} options={{headerShown: false}}></Stack.Screen> */}
        <Stack.Screen  name = "Medical Clinic" component ={MainTabScreen} options={{headerShown: false}}></Stack.Screen>
        {/* <Stack.Screen name = "Medical Clinic" component ={ScheduleScreen} options={{headerShown: true}}></Stack.Screen> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
