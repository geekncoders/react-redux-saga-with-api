import { SET_CART_ITEMS } from "../const";

export const apiCartData = (data = [], action) => {
    switch (action.type) { 
        // case PRODUCT_LIST:
        //     console.log('first', action.data)
        //     return [action.data]
        
        case SET_CART_ITEMS:
            console.log('second', action.data)
            return [...action.data.data]
        default:
            return data;
    }
}