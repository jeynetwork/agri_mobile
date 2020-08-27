import React from 'react';
// import {Select,Option,OptionList} from 'react-native-option-select';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import globalStyles from './styles/GlobalStyles';

export default function(){
    return(
        <View style={globalStyles.form} >
            <Text style={globalStyles.text} >Email</Text>
            <TextInput placeholder="email" style={globalStyles.inputText} />
            <Text style={globalStyles.text} >Category</Text>
            <TextInput placeholder="category" style={globalStyles.inputText}/>
            <Text style={globalStyles.text} >Password</Text>
            <TextInput placeholder="password" style={globalStyles.inputText}/>
            <TouchableOpacity style={globalStyles.button} >
                <Text style={globalStyles.button_text} >Register</Text>
            </TouchableOpacity>
        </View>
    )
}