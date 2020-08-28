import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Login from './Forms/Login';
import globalStyles from './styles/GlobalStyles';
import BottomNav from './BottomNav';

export default function Auth({navigation}){
    return(
        <View style={globalStyles.form} >
            <View style={globalStyles.containers}>
                <Login navigation={navigation} />
            </View>
            <BottomNav navigation={navigation} />
        </View>
    )
}