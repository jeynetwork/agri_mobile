import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import SingleProduct from './Products/SingleProduct';
import globalStyles from './styles/GlobalStyles';
import {Entypo, MaterialCommunityIcons, Zocial} from "@expo/vector-icons"
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import BottomNav from './BottomNav';

export default function Products({navigation}){
    return(
        <View style={globalStyles.form} >
            <View style={globalStyles.containers} >
                <SingleProduct navigation={navigation}/>
            </View>            
            <BottomNav navigation={navigation} />
        </View>
    )
}
const styles = StyleSheet.create({
})