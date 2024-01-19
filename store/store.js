import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../Slice/loginSlice";
import categorySlice from "../Slice/categorySlice";
import  ProductDetailsSlice  from "../Slice/ProductDetailsSlice";
import cartDataSlice from "../Slice/cartDataSlice";
import paymentSlice from "../Slice/paymentSlice";



export const store=configureStore({
    reducer:{
        login:loginSlice,
        product:ProductDetailsSlice,
        category:categorySlice,
        cartdata:cartDataSlice,
        payment:paymentSlice,
       
    }
})