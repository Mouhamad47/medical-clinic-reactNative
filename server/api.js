import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// import { cond } from 'react-native-reanimated';
// import { firebase } from 'react-native-firebase';
// import firebase from 'react-native-firebase';
// import  firebase from 'react-native-firebase' 
import firebase from 'firebase';
import config from './../firebase/firebaseconfig'
// import firestore from './..//node_modules/@firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyDNCpbTt3KidZ7Y_X_kFRlVxe9ycP4Iz9Q",
//     authDomain: "medlick.firebaseapp.com",
//     projectId: "medlick",
//     storageBucket: "medlick.appspot.com",
//     messagingSenderId: "584700422330",
//     appId: "1:584700422330:web:13f4ae2de82975358bba83"
// };
// if (!firebase.apps.length) {
//     firebase.initializeApp(config);
//   } else {
//       firebase.app(); // if already initialized
//   }

//   const db = firebase.firestore();
//   db.settings({
//    timestampsInSnapshots: true
//   });  
// if (!firebase.app.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

const BASE_URL = 'http://127.0.0.1:8000/api';
// const BASE_URL = 'http://medical-clinic.tk/api';
// const db = firestore;

const cookie = AsyncStorage.getItem("access_token");

async function getHeader() {
    var JWTtoken = await AsyncStorage.getItem("access_token");
    const token = {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JWTtoken
        },
    };
    return token;
}

export default {

    login: (data) =>
        axios.post(`${BASE_URL}/login`, data),

    logout: async () => {
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/logout`, header);
        return res;
    },

    getUserInfo: async () => {
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/userinfo`, header);
        return res;
    },

    getConsultationsByDate: async (date) => {
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/getconsultationsbydate/${date}`, header);
        return res;
    },
    getUserDots: async () => {
        let header = await getHeader();
        let res = await axios.get(`${BASE_URL}/getdots`, header)
        return res;
    },
    selectAllUsersExceptOne: async (id)=>{
        let header = await getHeader();
        let res  = await axios.get(`${BASE_URL}/getalluerexceptlogged/${id}`, header)
        return res;
    }

    // getMessages : async()=>{
    //     const messages = await db.collection('messages').doc('1-2').collection('1-2').onSnapshot(snapchot=>{
    //         snapchot.docChanges().forEach(change=>{
    //             console.log(change)
    //         })
    //     });
    //     // const messages = await db


    //     return messages;
    // }




}
