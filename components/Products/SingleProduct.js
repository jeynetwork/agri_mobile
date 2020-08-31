import React,{useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import {Ionicons, MaterialCommunityIcons, AntDesign, Feather} from '@expo/vector-icons';

export default function SingleProduct(){
    
    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState([]);
    
    const options = {
        method:'GET',
        headers:{
            'ContentType':'application/json'
        },
        body:JSON.stringify(data)
    }
    
    useEffect(()=>{
        fetch('http://localhost:4000/agrinetwork/products')
            .then((response)=>response.json())
            .then((json)=>setData(json))
            .catch(error=>console.error(error))
            .finally(()=>setIsloading(false))
    },[]);
    
    console.log(data);
    
    return(
            <FlatList
                data = {data}
                keyExtractor = {({id}, index)=>id}
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