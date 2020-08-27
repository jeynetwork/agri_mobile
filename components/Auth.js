import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default function Auth(){
    return(
        <View>
            <Text style={styles.Text} >
                Here is my authentication page
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Text:{
        fontStyle:'bold'
    }
})