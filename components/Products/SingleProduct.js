import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import {Fontisto, MaterialCommunityIcons, AntDesign, Feather} from '@expo/vector-icons';

export default function SingleProduct(){
    return(
        <View style={globalStyles.container} >
            <Text style={globalStyles.topHeader} >
                Product name
            </Text>
            <Image style={globalStyles.image} source={require('../assets/br.jpg')} />
            <View style={globalStyles.buttons} >
                <MaterialCommunityIcons style={globalStyles.icon} name="cart" size={24} color="black" />
                <AntDesign style={globalStyles.icon} name="like1" size={24} color="black" />
                <MaterialCommunityIcons style={globalStyles.icon} name="share" size={24} color="black" />
            </View>
        </View>
    )
}