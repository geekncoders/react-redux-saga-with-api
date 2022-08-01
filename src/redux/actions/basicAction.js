import { ADD_TO_CART, EMPTY_CART } from "../const";
import { REMOVE_FROM_CART } from "../const";

export const addToCart = (data) => {
    // console.log(data)
    return {
        type: ADD_TO_CART,
        data: data
  }
};

export const removeFromCart = (data) => {
    console.log(data) 
    return {
        type: REMOVE_FROM_CART,
        data: data
  }
};


export const emptyCart = () => {
    // console.log(data)
    return {
        type: EMPTY_CART,
  }
};
