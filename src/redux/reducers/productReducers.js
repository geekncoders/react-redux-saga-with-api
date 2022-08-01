import { SET_PRODUCT_LIST } from "../const";

export const productData = (data = [], action) => {
    switch (action.type) { 
        // case PRODUCT_LIST:
        //     console.log('first', action.data)
        //     return [action.data]
        
        case SET_PRODUCT_LIST:
            console.log('second', action.data)
            return [...action.data.data]
        default:
            return data;
    }
}