import React from "react";
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import globalStyles from "./styles/GlobalStyles";
import {Entypo, MaterialCommunityIcons, Zocial} from "@expo/vector-icons"

export default function BottomNav(){
    return(
        <View style={globalStyles.navigation} >
            <TouchableOpacity>
                <Entypo style={globalStyles.b_icon} name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Entypo style={globalStyles.b_icon} name="list" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Entypo style={globalStyles.b_icon} name="bookmarks" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                {/* <MaterialCommunityIcons style={globalStyles.b_icon} name="account-badge-horizontal" size={24} color="black" /> */}
                <MaterialCommunityIcons style={globalStyles.b_icon} name="account-circle" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Zocial style={globalStyles.b_icon} name="cart" size={24} color="black" />
            </TouchableOpacity>
            
        </View>
    )
}
