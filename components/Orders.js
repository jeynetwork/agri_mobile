import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Order from './Orders/Order'
import globalStyles from './styles/GlobalStyles';
import BottomNav from './BottomNav';

export default function Orders({navigation}){
    return(
        <View style={globalStyles.form} >
            <View style={globalStyles.containers} >
                <Order/>
            </View>
            <BottomNav navigation={navigation} />
        </View>
    )
}