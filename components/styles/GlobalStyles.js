import React from 'react';
import {StyleSheet} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const globalStyles = StyleSheet.create({
    form:{
        width:'100%',
        // padding:15,
        // borderWidth:1,
        // borderColor:'#CCC',
        borderRadius:4,
        marginTop:0,
        flex:1,
        flexDirection:"column"
        // backgroundColor:"#01292e0a"
    },
    bold:{
        fontWeight:'bold'
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
        alignSelf:'center'
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
        borderBottomWidth:1,
        padding:10,
        borderColor:"#CCC",
        marginTop:6,
        borderStyle:'solid'
    },
    button_text:{
        color:'white',
        textAlign:"center",
        justifyContent: "center",
        alignItems: "center"
    },
    topHeader:{
        marginTop:0
    },
    image:{
        marginTop:15,
        height:250,
        width:'100%'
        // backgroundColor:"whitesmoke"
        },
    buttons:{
        marginTop:10,
        flexDirection:"row"
    },
    icon:{
        padding:10,
        color:"#1a1a2e",
        // fontSize:20,
        position:'relative',
    },
    icon_t:{
        padding:10,
        color:"#1a1a2e",
        fontSize:20,
        position:'relative',
    },
    relativeHText:{
        position:'relative',
        top:-2
    },
    b_icon:{
        padding:18,
        paddingBottom:0,
        paddingTop:18,
        color:"#1a1a2e"
    },
    b_icon_h:{
        padding:10,
        paddingBottom:0,
        paddingTop:18,
        color:"#1a1a2e",
        right:0,
        position:'absolute'
        // backgroundColor:'gray'
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
        borderWidth:1,
        borderColor:"#CCC",
        borderRadius:4,
        padding:10
    },
    singleOrder:{
        width:'100%',
        flexDirection:"row",
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
        position:"absolute",
        bottom:-9,
        borderTopWidth:1,
        borderTopColor:"#ccc",
        flexDirection:'row',
        justifyContent:'center',
        flex:.1
    },containers:{
        flex:1,
        padding:10,
        flexDirection:'column',
        paddingBottom:100
    },container:{
        width:'100%',
        padding:10,
        borderWidth:1,
        borderColor:'#c4c4c4',
        borderRadius:4,
        marginTop:5
    },
    Header:{
        flexDirection:'row',
        flex:1,
        paddingBottom:20
    },
    HeaderText:{
        fontWeight:"bold",
        alignSelf:"flex-end",
        position:'absolute',
        textTransform:'uppercase'
    },
    HeaderIcons:{
        position:'absolute',
        right:0,
        bottom:0,
        width:'11%',
        // backgroundColor:'red',
        flexDirection:'row'
    },
    single_container:{
        width:'100%',
        padding:10,
        borderWidth:0,
        borderColor:'#c4c4c4',
        borderRadius:4,
        marginTop:5
    },
    transactionDetails:{
        width:'100%',
        padding:10,
        borderWidth:1,
        borderColor:'#c4c4c4',
        borderRadius:4,
        marginTop:5
    },
    qty_btns:{
        width:'100%',
        marginTop:10,
        borderWidth:1,
        padding:10,
        borderRadius:4,
        flexDirection:'row',
        borderColor:'#ccc',
        backgroundColor:"#ccc"
    },
    decrement:{
        paddingLeft:'10%',
        paddingRight:'10%',
        height:30,
        paddingTop:2,
        borderRightWidth:1,
        borderRightColor:'whitesmoke'
    },
    increment:{
        paddingLeft:'10%',
        paddingRight:'10%',
        height:30,
        paddingTop:2,
        borderLeftWidth:1,
        borderLeftColor:'whitesmoke'
    },
    qty_txt:{
        borderWidth:0,
        textAlign:'center',
        width:'40%',
        paddingLeft:4,
        paddingRight:4,
    },
    mid_icon:{
        justifyContent:'center'
    },
    sbt_btn:{
        width:'100%',
        marginTop:10,
        padding:10,
        borderRadius:4,
        backgroundColor:"blue",
        flexDirection:'row'
    },
    sbt_btn_txt:{
        textAlign:"center",
        color:'white',
        justifyContent: "center",
        alignItems: "center"
    },
    btn_icon:{
        paddingRight:10
    },
    row:{
        flexDirection:'row'
    },
    label:{
        fontWeight:'bold',
        marginTop:10,
        position:'relative',
        top:'10'
    },
    label_r:{
        fontWeight:'bold',
        position:'relative',
        top:1
    },
    link_l:{
        color:'blue',
        position:'relative',
        top:-5
    },
    top_label:{
        marginLeft:10,
        width:'80%',
        position:'relative',
        top:-5
    },
    map:{
        width:100,
        height:300
    }
});

export default globalStyles