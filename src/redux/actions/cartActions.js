import { CART_ITEMS } from "../const";

export const apiCartList = () => {
    return {
        type: CART_ITEMS,
    }
}

// export const setProductList = (data) => {
//     return {
//     type: SET_PRODUCT_LIST,
//         data: data
//     }
// }