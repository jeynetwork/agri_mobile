import React from 'react';
import {StyleSheet , View, Text, TextInput, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/GlobalStyles';

export default function(){
    return(
        <View style = {globalStyles.form} >
            <Text style={globalStyles.text} >username</Text>
            <TextInput placeholder='Username ...' style={globalStyles.inputText} ></TextInput>
            <Text style={globalStyles.text} >Password</Text>
            <TextInput placeholder='Password' style={globalStyles.inputText}></TextInput>
            
            <TouchableOpacity style = {globalStyles.button} >
                <Text style={globalStyles.button_text} >Login</Text>
            </TouchableOpacity>
            
            <Text style={globalStyles.center} >Not yet registered?</Text>
            <TouchableOpacity><Text style={globalStyles.center_r} >Register here</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    push:{
        marginTop:15
    },
    form:{
        width:'100%',
        padding:15,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:4
    },
    Header:{
        paddingBottom:15,
        textTransform:"uppercase"
    },
})