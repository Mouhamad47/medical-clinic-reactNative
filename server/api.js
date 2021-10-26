import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// import { cond } from 'react-native-reanimated';

const BASE_URL = 'http://127.0.0.1:8000/api';

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
    }


}
