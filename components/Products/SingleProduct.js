import React,{useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import {Ionicons, MaterialCommunityIcons, AntDesign, Feather} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {view_all_products} from '../redux/actions/products_actions';

function SingleProduct(props){
    
    const data = props.allProducts
    
    
    return(
            <FlatList
                data = {data}
                keyExtractor = {({id})=>id}
                renderItem={({item})=>(
                    <View style={globalStyles.container} >
                        <Text style={globalStyles.topHeader}>
                            <Ionicons style={globalStyles.icon} name="md-bookmark" size={24} color="black" />
                            {item.name} / <strong>{item.category}</strong>
                        </Text>
                        <Image style={globalStyles.image} source={require('../assets/br.jpg')} />

                        <Text style={globalStyles.text}>
                            {item.description}
                        </Text>
                        
                        <View style={globalStyles.buttons} >
                            <MaterialCommunityIcons style={globalStyles.icon} name="cart" size={24} color="black" />
                            <MaterialCommunityIcons style={globalStyles.icon} name="heart-outline" size={24} color="black" />
                            <MaterialCommunityIcons style={globalStyles.icon} name="share" size={24} color="black" />
                        </View>
                    </View>
                )}
            />
    )
}

const mapStateToProps = (state)=>{
    return{
        allProducts:state.product.products
    }
    }
    const mapDispatchToProps = (dispatch)=>{
    return{
        viewProducts:dispatch(view_all_products),
    }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
    