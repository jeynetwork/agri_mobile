import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import SingleService from './Service/SingleService';
import globalStyles from './styles/GlobalStyles';
import BottomNav from './BottomNav';

export default function Auth({navigation}){
    return(
        <View style={globalStyles.form} >
            <View style={globalStyles.containers}>
                <SingleService/>
            </View>
            <BottomNav navigation={navigation} />
        </View>
    )
}