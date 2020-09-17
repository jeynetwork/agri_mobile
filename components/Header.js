import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import globalStyles from './styles/GlobalStyles';
import {Octicons,MaterialCommunityIcons} from '@expo/vector-icons';

export default function Header(props){
    const account = ()=>{
        props.navigation.navigate('Account');
    }
    return(
        <View style={globalStyles.Header} >
            <Text style={globalStyles.HeaderText}>
                Agrinetwork
            </Text>
            <View style={globalStyles.HeaderIcons} >
                <TouchableOpacity onPress={account}>
                    <MaterialCommunityIcons style={globalStyles.b_icon} name="account-circle" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}