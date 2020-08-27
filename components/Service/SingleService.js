import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function SingleService(){
    return(
        <View style={globalStyles.form} >
            <View style={globalStyles.service} >
                <Image style={globalStyles.service_image} source={require('../assets/br.jpg')} />
                <View style={globalStyles.details} >
                    <Text style={globalStyles.textHeader} >
                        Service title
                    </Text>
                    <Text style={globalStyles.text_detail} >
                    Service detailsService detailsService detailsService
                    </Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons style={globalStyles.icon} name="eye" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}