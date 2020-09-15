import {NEW_PRODUCT,VIEW_PRODUCTS,VIEW_PRODUCT,EDIT_PRODUCT,DELETE_PRODUCT, ERROR} from './types';
import axios from 'axios';
import store from '../Store';

export const new_product = (newProduct)=>{
    axios
        .post('http://localhost:4000/agrinetwork/products', newProduct)
        .then(res=>
            store.dispatch({
                type:NEW_PRODUCT,
                payload:res.data
            })
        )
        .catch(err=>
            console.log(err)
        )
}
export const view_products = ()=>{
    axios
        .get('http://192.168.0.2:4000/agrinetwork/products/my_products')
        .then(res=>
            store.dispatch({
                type:VIEW_PRODUCTS,
                payload: res.data
            })
        )
}
export const view_all_products = ()=>{
    axios
        .get('http://192.168.0.2:4000/agrinetwork/products')
        .then(res=>
            store.dispatch({
                type:VIEW_PRODUCTS,
                payload: res.data
            })
        ).catch(err=>
            console.log(err)
        )
}
export const view_product = (id)=>{
    axios.get(`http://localhost:4000/agrinetwork/products/${id}`)
        .then(res=>
            store.dispatch({
                type:VIEW_PRODUCT,
                payload:res.data
            })
        )
        .catch(err=>{
            console.error(err);
        })
}
export const edit_product = (id)=>{
    axios.put(`http://localhost:4000/agrinetwork/products/${id._id}`)
    .then(res=>
        store.dispatch({
            type:EDIT_PRODUCT,
            payload:res.data
        })
    )
    .catch(err=>{
        console.error(err);
    })
}
export const delete_product = (id)=>{
    axios
        .delete(`http://localhost:4000/agrinetwork/products/${id}`)
        .then(res=>
            store.dispatch({
                type:DELETE_PRODUCT,
                payload:res.data
            })
        )
        .catch(err=>{
            console.error(err);
        })
}


