import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, Image, Item, TextInput, Button, Pressable, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, createRef, useEffect } from 'react';
import api from '../../server/api';



export default function Schedule({route}) {
   
    const {dateDay} = route.params ;
    const [consultations,setConsultations]=useState([]);

    const getConsultations = async (dateDay) =>{
        api.getConsultationsByDate(dateDay).then((response)=>{
            
            setConsultations(response.data);
             
         })
     }

     useEffect(() => {
        getConsultations(dateDay);
        
    }, [])
   
   
   
   
    return (
        <View style={{ backgroundColor: 'white',height:'100%' }}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Consultations</Text>
            </View>
            <ScrollView>
                <FlatList
                    style={{backgroundColor:'white',height:522}}
                    data={consultations}
                    keyExtractor={(item,index) => {
                        return index.toString();
                    }}
                    renderItem ={({item})=>{
                        return (
                            <View style={styles.consultationView} >
                                <View style={{flex:4}}>
                                    <View style={styles.consultationDate}>
                                        <Text style={styles.consultationDateText}>{item.start_hour} - {item.end_hour}</Text>
                                    </View>
                                    <View style={styles.nameView}>
                                        <Text style={styles.nameText}>{item.first_name} {item.last_name}</Text>
                                    </View>
                                    <View style={styles.infoView}>
                                        <Text style={styles.infoText}><Icon name= "map-pin" style={{fontSize:15}}/>  {item.address}</Text>
                                        <Text style={styles.infoText}><Icon name= "mobile" style={{fontSize:24}}/>  {item.phone_number}</Text>
                                    </View>
                                </View>
                                <View style={styles.avatarImage}>
                                    <Image style={{width: 60, height: 60}} source={require('../../pictures/avatar.svg')} />
                                </View>
                               
                               
                               
                            </View>
                        )
                    }}
                    />
            </ScrollView>
            
        </View>

    );
}

const styles = StyleSheet.create({
    title : {
        padding : 10
    },  
    titleText :{
        fontSize : 25,
        fontWeight: 700,
        color: '#24447C',
        letterSpacing: 1,
    },
    consultationView :{
        backgroundColor: '#B4E4E4',
        borderRadius: 15,
        marginTop: 10 ,
        marginLeft : 15,
        marginRight : 15,
        flexDirection :'row'

    },
    consultationDate :{
        padding : 10
    },
    consultationDateText :{
        fontWeight: 600,
        color: '#24447C',
    },
    nameView :{
        paddingTop : 5,
        paddingLeft :10
        
    },
    nameText :{
        fontSize : 18,
        fontWeight: 500,
        color: '#24447C',
    },
    infoView :{
        padding : 10
    },
    avatarImage : {
        textAlign: 'center',
        marginTop: 38,
        flex : 2,
        marginLeft: 75,
    },
    infoText : {
        color: '#24447C'
    }
  });