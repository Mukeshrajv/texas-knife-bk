import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../Slice/loginSlice";
import categorySlice from "../Slice/categorySlice";
import  ProductDetailsSlice  from "../Slice/ProductDetailsSlice";


export const store=configureStore({
    reducer:{
        login:loginSlice,
        product:ProductDetailsSlice,
        category:categorySlice,
       
    }
})