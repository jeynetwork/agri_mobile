import React from 'react';
import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    form:{
        width:'100%',
        // padding:15,
        // borderWidth:1,
        // borderColor:'#CCC',
        borderRadius:4,
        marginTop:15,
        flex:1,
        flexDirection:"column"
        // backgroundColor:"#01292e0a"
    },container:{
        width:'100%',
        padding:15,
        borderWidth:1,
        borderColor:'#CCC',
        borderRadius:4,
        marginTop:15
    },
    text:{
        marginTop:10
    },
    textHeader:{
        fontWeight:"bold",
        textTransform:'uppercase'
    },
    text_detail:{
        marginTop:10
    },
    button:{
        padding:15,
        backgroundColor:'#01292e',
        marginTop:15,
        borderRadius:4,
        color:'white',
        textAlign:'center'
    },
    center:{
        textAlign:'center',
        marginTop:15
    },
    center_r:{
        textAlign:"center",
        color:"blue"
    },
    inputText:{
        borderWidth:1,
        padding:10,
        borderColor:"#CCC",
        borderRadius:4,
        marginTop:6,
        borderStyle:'solid'
    },
    button_text:{
        color:'white',
        textAlign:"center"
    },
    topHeader:{
        marginTop:0
    },
    image:{
        marginTop:15,
        height:250,
        backgroundColor:"whitesmoke",
        // objectFit:"contain",
        elevation:3,
        // shadowColor:"#000",
        // shadowOffset:"#000"
        },
    buttons:{
        marginTop:10,
        flexDirection:"row"
    },
    icon:{
        padding:10,
        color:"#1a1a2e"
    },
    b_icon:{
        padding:18,
        paddingBottom:0,
        paddingTop:18,
        color:"#1a1a2e"
    },
    icon_f:{
        paddingLeft:0,
        marginTop:5,
        color:"#1a1a2e"
    },
    service:{
        width:'100%',
        height:130,
        flexDirection:"row",
        backgroundColor:'whitesmoke',
        borderWidth:1,
        borderColor:"#CCC",
        borderRadius:4,
        padding:10
    },
    singleOrder:{
        width:'100%',
        flexDirection:"row",
        backgroundColor:"whitesmoke",
        borderWidth:1,
        borderColor:"#CCC",
        padding:10,
        borderRadius:4
    },
    service_image:{
        width:'35%',
        height:"100%"
    },
    order_image:{
        width:'100%',
        height:100,
        backgroundColor:"#CCC",
        padding:10,
        marginTop:5
    },
    details:{
        width:'62%',
        marginLeft:10,
        height:'100%'
    },
    navigation:{
        height:75,
        width:'100%',
        backgroundColor:"whitesmoke",
        // position:"absolute",
        bottom: -7,
        borderTopWidth:1,
        borderTopColor:"#ccc",
        flexDirection:'row',
        justifyContent:'center',
        flex:.13
    }
});

export default globalStyles