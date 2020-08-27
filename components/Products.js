import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import SingleProduct from './Products/SingleProduct';
import globalStyles from './styles/GlobalStyles';

export default function Auth(){
    return(
        <View style={globalStyles.form} >
            <SingleProduct/>
            <SingleProduct/>
        </View>
    )
}
const styles = StyleSheet.create({
})