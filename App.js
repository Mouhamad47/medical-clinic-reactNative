import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/LoginScreen/login';
import MainTabScreen from './navigation/mainTabScreen';
import ScheduleScreen from './screens/ScheduleScreen/schedule';
import { useState } from 'react';



// const rootReducers = combineReducers({
//     auth :  authReducer
// });
// const store = createStore(rootReducers);

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
      <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:'#8C0C33'},headerTintColor:'#F9DEC9'}}>

        <>
          <Stack.Screen name = "Login" component = {Login} options={{headerShown : false}} />
        </>
      </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions ={{headerStyle :{backgroundColor:'#44BCBC'},headerTintColor:'#24447C'}}  >
        <Stack.Screen name = "Auth" component ={Auth} options={{headerShown: false}}/>
        <Stack.Screen  name = "MainTabScreen" component ={MainTabScreen} options={{headerShown: false}} />
        

      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
// export default function App() {
  
//   return (
//     <Provider store = {store}>

//     </Provider>
   
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
