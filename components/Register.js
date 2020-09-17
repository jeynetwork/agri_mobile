import React,{useState} from 'react';
// import {Select,Option,OptionList} from 'react-native-option-select';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { registerUser } from './redux/actions/auth_actions';
import globalStyles from './styles/GlobalStyles';

export default function(){

    const [User,setUser] = useState({
        email:"",
        category:"",
        password:""
    });
    
    const handleChange = (e)=>{
        e.preventDefault();
        const key = e.target.id;
        const value = e.target.value;
        setUser(User=>{
            return{
                ...User,
                [key]:value
            }
        })
    }
    
    const handleRegister = ()=>{
        registerUser(User);
    }

    return(
        <View style={globalStyles.form} >
            <View style={globalStyles.containers} >
                <View style={globalStyles.container}>
                    <Text style={globalStyles.text} >Email</Text>
                    <TextInput placeholder="email" id="email" onChange={handleChange} style={globalStyles.inputText} />
                    <Text style={globalStyles.text} >Category</Text>
                    <TextInput placeholder="category" id="category" onChange={handleChange} style={globalStyles.inputText}/>
                    <Text style={globalStyles.text} >Password</Text>
                    <TextInput placeholder="password" id="password" onChange={handleChange} style={globalStyles.inputText}/>
                    <TouchableOpacity style={globalStyles.sbt_btn} onPress = {handleRegister}>
                        <Text style={globalStyles.button_text} >Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}