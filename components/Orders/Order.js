import React from 'react';
import {View,TouchableOpacity, Text} from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import {MaterialCommunityIcons,Entypo} from '@expo/vector-icons';

export default function(){
    return(
        <View style={globalStyles.singleOrder} >
                <View style={globalStyles.service_image} ></View>
                <View style={globalStyles.details} >
                    <Text style={globalStyles.textHeader} >
                        Order date
                    </Text>
                    <Text style={globalStyles.text_detail} >
                    Service detailsService detailsService detailsService
                    </Text>
                    <View style={globalStyles.buttons} >
                        <TouchableOpacity>
                            <MaterialCommunityIcons style={globalStyles.icon} name="eye" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo style={globalStyles.icon} name="archive" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}