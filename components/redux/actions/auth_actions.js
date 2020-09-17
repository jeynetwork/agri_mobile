import axios from 'axios';
import {loadErrors} from './errors_action';
import {
    USER_LOADING,USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    } from '../actions/types';
import store from '../Store';

    export const loadUser = ()=>(dispatch)=>{
        dispatch({
            type:USER_LOADING
        });
        
        
        
        axios
            .get('http://192.168.0.2:4000/agrinetwork/auth/me')
            .then(res=>
                dispatch({
                    type:USER_LOADED,
                    payload:res.data
                }))
            .catch((err)=>{
                dispatch(
                    loadErrors(err.response.data)
                )
            })
    }
    

export const loadUsers = ()=>()=>{
    store.dispatch({
        type:USER_LOADING
    });
    
    
    
    axios
        .get('http://192.168.0.2:4000/agrinetwork/users')
        .then(res=>
            store.dispatch({
                type:USER_LOADED,
                payload:res.data
            }))
        .catch((err)=>{
            store.dispatch(
                loadErrors(err.response.data)
            )
        })
}

export const registerUser = newUser=>{
    const request = axios.post('http://192.168.0.2:4000/agrinetwork/users', newUser);
    if(request){
        return (dispatch)=>{
            request
                .then(res=>dispatch({
                    type:REGISTER_SUCCESS,
                    payload:res.data
                }))
                .catch(err=>{
                    throw err
                })

                console.log(request);
        }
    } else{
        console.log('failed');
    }
    
}

export const loginUser = (user) =>{
    axios.post('http://192.168.0.2:4000/agrinetwork/auth',user, tokenConfig)
    .then(res=>store.dispatch({
        type:[LOGIN_SUCCESS],
        payload:res.data
    }))
    .then((res)=>{
        const header = new Headers();
        header.append('x-auth-token',res.payload);
        console.log(res.payload);
        store.dispatch({
            type:LOGIN_SUCCESS,
            payload:res.payload
        })
    })
    .catch(err=>
        store.dispatch(
            {
                type:LOGIN_FAIL,
                payload:err
            }
        )
    )
}

export const logoutUser = ()=>{
    axios.put('http://192.168.0.2:4000/agrinetwork/auth/me',)
        .then(res=>
            store.dispatch({
                type:LOGOUT_SUCCESS,
                payload:res.data
            })
        )
        .catch(err=>
            console.log('cannot logout')
        )
}

export const tokenConfig = getState=>{

    const token = getState().auth.token;
    
    const config = {
        headers:{
            'Content-type':'application/json'
        }
    }
    if(token){
        config.headers['x-auth-token']=token
    }
    return config;
}