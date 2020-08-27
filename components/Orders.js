import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Order from './Orders/Order'
import globalStyles from './styles/GlobalStyles';

export default function Orders(){
    return(
        <View style={globalStyles.form} >
            <Order/>
            <Text>.</Text>
            <Order/>
        </View>
    )
}
const styles = StyleSheet.create({
    Text:{
        fontStyle:'bold'
    }
})