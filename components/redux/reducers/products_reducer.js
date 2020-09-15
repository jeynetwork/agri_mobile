import {NEW_PRODUCT, VIEW_PRODUCTS, VIEW_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT} from '../actions/types';

const initialState = {
    products:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case NEW_PRODUCT:
            return{
                ...state,
                products:[action.payload, ...state.products]
            }
        case VIEW_PRODUCTS:
            return{
                ...state,
                products:action.payload
            }
        case VIEW_PRODUCT:
            return{
                ...state,
                products:action.payload
            }
        case EDIT_PRODUCT:
            return{
                ...state,
                products:state.products.slice(product=>product._id===action.payload)
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                products:state.products.filter(product=>product._id!==action.payload)
            }
        
        default:
            return state;
    }
}