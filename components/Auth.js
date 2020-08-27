import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Login from './Forms/Login';

export default function Auth(){
    return(
        <View>
            <Text style={styles.Text} >
                <Login/>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Text:{
        fontStyle:'bold'
    }
})