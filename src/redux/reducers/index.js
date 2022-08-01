import { combineReducers } from "redux";
import { cartData } from "./basicReducer";
import { productData } from "./productReducers";
import { apiCartData } from "./cartReducers";

const rootReducer = combineReducers({ cartData, productData, apiCartData });
export default rootReducer;