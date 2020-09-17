import React,{useState,useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback, Alert} from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import {Entypo, MaterialCommunityIcons, AntDesign, FontAwesome5} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {view_all_products, view_product} from '../redux/actions/products_actions';
import { TextInput } from 'react-native-gesture-handler';
import { Map, GoogleApiWrapper } from 'google-maps-react';


function SingleProduct(props){

        
    const [Viewed, setViewed] = useState({
        vstate:false,
        id:""
    });
    
    
    const [Loc, setLoc] = useState({
        ready:false,
        where:{lat:null, lng:null},
        error:null
    })
    
    useEffect(() => {
            let geoOptions = {
                enableHighAccuracy:true,
                timeOut:20000,
                maximumAge:60*60*24
            };
            setLoc({
                ready:false,
                error:null
            });
            navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure, geoOptions)
    },2000)
    
    
    const geoSuccess = (position)=>{
        setLoc({
            ready:true,
            error:null,
            where:{lat:position.coords.latitude, lng:position.coords.longitude}
        })
    }
    
    const geoFailure = (err)=>{
        setLoc({
            error:err.message
        })
    }
    
    const [Quantity, setQuantity] = useState({
        quantity:"0"
    })
    

    const increment = ()=>{
        setQuantity((Quantity)=>{
            return{
                ...Quantity,
                quantity:parseInt(Quantity.quantity)+1
            }
        })
    }
    const decrement = ()=>{
        setQuantity((Quantity)=>{
            if(Quantity.quantity<1){
                return{
                    ...Quantity,
                    quantity:parseInt(Quantity.quantity)
                }
            } else{
                return{
                    ...Quantity,
                    quantity:parseInt(Quantity.quantity)-1
                }
            }
        })
    }
    
    const data = props.allProducts
    const goto = (e)=>{
        // setViewed(Viewed=>{
        //     if(Viewed.vstate){
        //         return{
        //             ...Viewed,
        //             vstate:false,
        //             "id":""
        //         }
        //     } else{
        //         return{
        //             ...Viewed,
        //             vstate:true,
        //             "id":e._id,
        //             data:e
        //         }
        //     }
        // })
        console.log("hh")
    }
    const singledata = Viewed.data

    const showAlert = ()=>{
        Alert.alert('Do you really want to submit the order?', `you have ordered for ${Quantity.quantity} ${singledata.name}`,[
            {text:"Submit", onPress:()=>{console.log("yay")}}
        ])
    }
    return(
            <View>
                {
                    Viewed.vstate===true
                    ?
                            <View style={globalStyles.single_container} key={singledata._id} >
                                {/* <Map
                                    google={props.google}
                                    zoom={14}
                                    style={globalStyles.map}
                                    initialCenter={
                                    {
                                        lat: Loc.where.lat,
                                        lng: Loc.where.lng
                                    }
                                    }
                                /> */}
                                <View style={globalStyles.topHeader}>
                                    <Entypo name="chevron-left" size={24} color="blue" onPress={goto} />
                                    <Text style={globalStyles.link_l} onPress={goto}>Back</Text>
                                    <View style={globalStyles.top_label} >
                                        <Text style={globalStyles.bold} >{singledata.name}  {singledata.category}</Text>
                                    </View>
                                </View>

                                <TouchableWithoutFeedback>
                                    <Image style={globalStyles.image} source={require('../assets/br.jpg')} />
                                </TouchableWithoutFeedback>

                                <Text style={globalStyles.label} >description</Text>
                                <Text style={globalStyles.text}>
                                    {singledata.description}
                                </Text>
                                <Text style={globalStyles.label} >quantity</Text>
                                <View style={globalStyles.text}>
                                    <Text>{singledata.quantity}</Text>
                                    {
                                        singledata.quantity>1
                                        ?<Text> products</Text>
                                        :<Text> product</Text>
                                    }
                                </View>
                        
                                <View style={globalStyles.buttons} >
                                    <MaterialCommunityIcons style={globalStyles.icon} name="cart" size={24} color="black" />
                                    <MaterialCommunityIcons style={globalStyles.icon} name="heart-outline" size={24} color="black" />
                                    <MaterialCommunityIcons style={globalStyles.icon} name="share" size={24} color="black" />
                                </View>
                                
                                <View style={globalStyles.transactionDetails} >
                                    <Text style={globalStyles.bold} >Buy {singledata.name}</Text>
                                    <Text>Quantity</Text>
                                    <View style={globalStyles.qty_btns} >
                                        <TouchableOpacity style={globalStyles.decrement} >
                                            <AntDesign name="caretleft" style={globalStyles.mid_icon} size={24} color="black" onPress={decrement} />
                                        </TouchableOpacity>
                                        <TextInput style={globalStyles.qty_txt} placeholder="eg 3" value={Quantity.quantity} />
                                        <TouchableOpacity style={globalStyles.increment} >
                                            <AntDesign name="caretright" style={globalStyles.mid_icon} size={24} color="black" onPress={increment} /> 
                                        </TouchableOpacity>
                                    </View>
                                    <Text>Mode of payment</Text>
                                    <View style={globalStyles.qty_btns} >
                                        <Text>On delivery</Text>
                                    </View>
                                    <View style={globalStyles.qty_btns} >
                                        <TouchableOpacity  style={globalStyles.row} >
                                            <FontAwesome5 name="map-marked-alt" style={globalStyles.btn_icon} size={20} color="black" />
                                            <Text style={globalStyles.label_r} >Chose delivery location</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                                    <TouchableOpacity style={globalStyles.sbt_btn} onPress={showAlert}>
                                        <MaterialCommunityIcons name="checkbox-multiple-marked" size={24} style={globalStyles.btn_icon} color="white" />
                                        <Text style={globalStyles.sbt_btn_txt} >Complete Order</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    :   
                    <FlatList
                        data = {data}
                        keyExtractor = {({id})=>id}
                        renderItem={({item})=>(
                                <View style={globalStyles.container} key={item._id} >
                                    <View style={globalStyles.topHeader}>
                                        <Text>{item.name}</Text><Text>/</Text><Text style={globalStyles.bold} >{item.category}</Text>
                                    </View>

                                    <TouchableWithoutFeedback onPress={goto.bind(this,item)} >
                                        <Image style={globalStyles.image} source={require('../assets/br.jpg')} />
                                    </TouchableWithoutFeedback>

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
                }
            </View>
    )
}

const mapStateToProps = (state)=>{
    return{
        allProducts:state.product.products,
        navigation:state.navigate
    }
}
    const mapDispatchToProps = (dispatch)=>{
    return{
        viewProducts:dispatch(view_all_products),
        viewProduct:(data)=>{dispatch(view_product(data))},
    }
    }

    const WrappedContainer = GoogleApiWrapper({
        apiKey: "AIzaSyAXkzzDsl-OGFrTqvzm7fmrtPyxV1XAt1o"
        })(SingleProduct);
    // export WrappedContainer;
    export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)