import {
    GET_ERRORS
    } from '../actions/types'
    
    
export const loadErrors = (msg)=>{
    return{
        type:GET_ERRORS,
        payload:msg
    }
}