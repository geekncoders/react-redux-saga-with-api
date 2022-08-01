import { PRODUCT_LIST } from "../const";

export const productList = () => {
    return {
        type: PRODUCT_LIST,
    }
}

// export const setProductList = (data) => {
//     return {
//     type: SET_PRODUCT_LIST,
//         data: data
//     }
// }