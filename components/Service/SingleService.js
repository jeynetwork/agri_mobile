import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import {Entypo} from "@expo/vector-icons";

export default function SingleService(){
    return(
        <View style={globalStyles.form} >
            <View style={globalStyles.service} >
                <View style={globalStyles.service_image} ></View>
                <View style={globalStyles.details} >
                    <Text style={globalStyles.textHeader} >
                        Service title
                    </Text>
                    <Text style={globalStyles.text_detail} >
                    Service detailsService detailsService detailsService
                    </Text>
                    <TouchableOpacity>
                        <Entypo style={globalStyles.icon_f} name="pin" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}