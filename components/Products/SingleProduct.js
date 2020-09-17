import React,{useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback} from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import {Entypo, MaterialCommunityIcons, AntDesign, Feather} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {view_all_products, view_product} from '../redux/actions/products_actions';
import { TextInput } from 'react-native-gesture-handler';

function SingleProduct(props){

    const [Viewed, setViewed] = useState({
        vstate:false,
        id:""
    });
    
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
            if(Quantity<1){
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
        setViewed(Viewed=>{
            if(Viewed.vstate){
                return{
                    ...Viewed,
                    vstate:false,
                    "id":""
                }
            } else{
                return{
                    ...Viewed,
                    vstate:true,
                    "id":e._id,
                    data:e
                }
            }
        })
    }
    const singledata = Viewed.data
    console.log(singledata);
    return(
            <View>
                {
                    Viewed.vstate===true
                    ?
                            <View style={globalStyles.single_container} key={singledata._id} >
                                <Text style={globalStyles.topHeader}>
                                    <Entypo name="chevron-left" size={24} color="blue" onPress={goto} />
                                    <Text style={globalStyles.link_l} onPress={goto}>Back</Text>
                                    <View style={globalStyles.top_label} >
                                        <Text style={globalStyles.bold} >{singledata.name} / {singledata.category}</Text>
                                    </View>
                                </Text>

                                <TouchableWithoutFeedback>
                                    <Image style={globalStyles.image} source={require('../assets/br.jpg')} />
                                </TouchableWithoutFeedback>

                                <Text style={globalStyles.label} >description</Text>
                                <Text style={globalStyles.text}>
                                    {singledata.description}
                                </Text>
                                <Text style={globalStyles.label} >quantity</Text>
                                <Text style={globalStyles.text}>
                                    {singledata.quantity}
                                    {
                                        singledata.quantity>1
                                        ?<Text> products</Text>
                                        :<Text> product</Text>
                                    }
                                </Text>
                        
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
                                            <AntDesign name="caretleft" style={globalStyles.mid_icon} size={24} color="black" onPress={decrement} /></TouchableOpacity>
                                        <TextInput style={globalStyles.qty_txt} placeholder="eg 3" value={Quantity.quantity} />
                                        <TouchableOpacity style={globalStyles.increment} >
                                            <AntDesign name="caretright" style={globalStyles.mid_icon} size={24} color="black" onPress={increment} /> 
                                        </TouchableOpacity>
                                    </View>
                                    <Text>Mode of payment</Text>
                                    <View style={globalStyles.qty_btns} >
                                        <Text>On delivery</Text>
                                    </View>
                                    <TouchableOpacity style={globalStyles.sbt_btn} >
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
                                    <Text style={globalStyles.topHeader}>
                                        {/* <Ionicons style={globalStyles.icon} name="md-bookmark" size={24} color="black" /> */}
                                        <Text>{item.name}</Text> / <Text style={globalStyles.bold} >{item.category}</Text>
                                    </Text>

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
    export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
    