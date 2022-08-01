import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../const";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      data.length = data.length ? data.length - 1 : [];  // If data has some length then it will reduce else data goes empty only.
      return [...data];

    case EMPTY_CART:
      data = [];
      return data;

    default:
      return data;
  }
};
