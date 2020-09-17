import React from "react";
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import globalStyles from "./styles/GlobalStyles";
import {Entypo, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons"

export default function BottomNav({navigation}){
    const home=()=>{
        navigation.navigate('Home');
    }
    const services=()=>{
        navigation.navigate('Services');
    }
    const orders=()=>{
        navigation.navigate('Orders');
    }
    const account=()=>{
        navigation.navigate('Account');
    }
    return(
    <View style={globalStyles.navigation} >
        <TouchableOpacity onPress= {home} >
            <Entypo style={globalStyles.b_icon} name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity  onPress= {orders} >
            <Entypo style={globalStyles.b_icon} name="bookmarks" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress= {account} >
            {/* <MaterialCommunityIcons style={globalStyles.b_icon} name="account-badge-horizontal" size={24} color="black" /> */}
            {/* <MaterialCommunityIconsname="message-settings" size={24} color="black" /> */}
            <Ionicons name="ios-chatbubbles" style={globalStyles.b_icon} size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={services} >
            <Entypo style={globalStyles.b_icon} name="list" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={account}>
            <MaterialCommunityIcons style={globalStyles.b_icon} name="account-circle" size={24} color="black" />
        </TouchableOpacity>
            
    </View>
    )
}
