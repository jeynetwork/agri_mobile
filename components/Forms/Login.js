import React,{useState} from 'react';
import {StyleSheet , View, Text, TextInput, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import {loginUser} from '../redux/actions/auth_actions';
import {connect} from 'react-redux';

function Login({navigation}){

    const [User, setUser] = useState({
        email:'',
        category:'',
        password:''
    })

    const handleChangeLog = (e)=>{
        const key = e.target.id;
        const value = e.target.value
        setUser((User)=>{
            return{
                ...User,
                [key]:value
            }
        })
        // console.log(User);
    }

    const onLoginUser = ()=>{
        loginUser(User);
    }
    
    const register = ()=>{
        navigation.navigate('Register');
    }
    return(
        <View style = {globalStyles.container} >
            <Text style={globalStyles.text} >username</Text>
            <TextInput placeholder='Username ...' id='email' onChange={handleChangeLog} style={globalStyles.inputText} ></TextInput>
            <Text style={globalStyles.text} >Password</Text>
            <TextInput placeholder='Password' id='password' onChange={handleChangeLog} style={globalStyles.inputText}></TextInput>
            
            <TouchableOpacity style = {globalStyles.sbt_btn} onClick={onLoginUser}>
                <Text style={globalStyles.sbt_btn_txt} >Login</Text>
            </TouchableOpacity>
            
            <Text style={globalStyles.center} >Not yet registered?</Text>
            <TouchableOpacity onPress={register} ><Text style={globalStyles.center_r} >Register here</Text></TouchableOpacity>
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

const mapDispatchToProps = (dispatch)=>{
    return {
        login_user:(user)=>dispatch(loginUser(user))
    }
}
export default connect(null, mapDispatchToProps)(Login)